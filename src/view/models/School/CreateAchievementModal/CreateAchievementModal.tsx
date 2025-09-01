import * as React from 'react';
import {
    Box, Typography, Modal
} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../../../component/Button/Button';
import {TextField} from '../../../component/TextField/TextField';
import {DropdownField} from '../../../component/DropdownField/DropdownField';
import achievementAPIController from "../../../../controller/AchievementAPIController";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #006CAF',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

export default function CreateAchievementModal({studentId, onAchievementSaved}: {
    studentId: string,
    onAchievementSaved?: () => void
}) {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState<any>({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (name: string, value: string) => {
        setFormData((prev: any) => ({...prev, [name]: value}));
    };

    const handleSubmit = async () => {
        const payload = {
            name: formData.name,
            description: formData.description,
            level: formData.level,
            place: formData.place,
            category: formData.category,
            date: formData.date,
        };

        const response = await achievementAPIController.saveAchievements(payload, studentId);
        if (response) {
            alert('Achievement added successfully!');
            setFormData({});
            setOpen(false);
            onAchievementSaved?.();
        } else {
            alert('Failed to add achievement.');
        }
    };

    // Enum dropdown options
    const levelOptions = [
        {label: "Select Level", value: ""},
        {label: "Zonal Level", value: "ZONAL_LEVEL"},
        {label: "Provincial Level", value: "PROVINCIAL_LEVEL"},
        {label: "National Level", value: "NATIONAL_LEVEL"}
    ];

    const placeOptions = [
        {label: "Select Place", value: ""},
        {label: "1st Place", value: "FIRST"},
        {label: "2nd Place", value: "SECOND"},
        {label: "3rd Place", value: "THIRD"}
    ];

    const categoryOptions = [
        {label: "Select Category", value: ""},
        {label: "Sport", value: "SPORT"},
        {label: "Leadership", value: "LEADERSHIP"},
        {label: "Educational", value: "EDUCATIONAL"}
    ];

    return (
        <div>

            <Button
                name="+ Achievement"
                color="bg-[#2FEB00]"
                onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <button
                        className="absolute top-[15px] right-[15px] text-red-500 hover:text-gray-700 p-2 w-[40px] h-[40px] bg-white shadow-lg rounded-lg flex justify-center items-center"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>
                    <Typography variant="h6" component="h2">Add Student Achievement</Typography>

                    {/* Achievement Info */}
                    <section className='mt-5 p-5 bg-white shadow-md rounded-xl'>
                        <h3 className="font-medium mb-4">Achievement Details</h3>
                        <div className='flex flex-wrap gap-3'>
                            <TextField
                                name="name"
                                label="Achievement Name"
                                value={formData.name || ""}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                            <TextField
                                name="description"
                                label="Description"
                                value={formData.description || ""}
                                onChange={(e) => handleChange("description", e.target.value)}
                            />
                            <TextField
                                name="date"
                                type="date"
                                label="Date"
                                value={formData.date || ""}
                                onChange={(e) => handleChange("date", e.target.value)}
                            />
                            <DropdownField
                                label="Level"
                                options={levelOptions}
                                value={formData.level || ""}
                                onChange={(e) => handleChange("level", e.target.value)}
                            />
                            <DropdownField
                                label="Place"
                                options={placeOptions}
                                value={formData.place || ""}
                                onChange={(e) => handleChange("place", e.target.value)}
                            />
                            <DropdownField
                                label="Category"
                                options={categoryOptions}
                                value={formData.category || ""}
                                onChange={(e) => handleChange("category", e.target.value)}
                            />
                        </div>
                    </section>

                    <section className='mt-5 flex justify-end'>
                        <Button name="Add Achievement" color="bg-blue-600" onClick={handleSubmit}/>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}
