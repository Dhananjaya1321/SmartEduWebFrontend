// @ts-ignore
import dashboard from "../../assets/icons/menu.png"
// @ts-ignore
import PEoMs from "../../assets/icons/office-building.png"
// @ts-ignore
import users   from "../../assets/icons/team.png"
// @ts-ignore
import exams from "../../assets/icons/exam (1).png"



// @ts-ignore
import activeDashboard from "../../assets/icons/menu (1).png"
// @ts-ignore
import activePEoMs from "../../assets/icons/office-building (1).png"
// @ts-ignore
import activeExams from "../../assets/icons/exam (2).png"
// @ts-ignore
import activeUsers   from "../../assets/icons/team (1).png"
// @ts-ignore
import activeExamAndNICApplications   from "../../assets/icons/approval (1).png"

import {useState} from "react";
import {SideNavBarButton} from "../SideNavBarButton/SideNavBarButton";

export const MEoMAdminSideNavBar = () => {
    const [activeButton, setActiveButton] = useState<string>("");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName); // Update active button state when clicked
    };

    return (
        <nav className='bg-white h-screen w-[10%] p-2 top-0 left-0 right-0 relative shadow z-50 flex flex-col'>
            <SideNavBarButton
                path={'/ministry-education-offices-admin'}
                name={'Dashboard'}
                image={dashboard}
                activeImage={activeDashboard}
                isActive={activeButton === 'Dashboard'}
                onClick={() => handleButtonClick('Dashboard')}
            />
            <SideNavBarButton
                path={'/ministry-education-offices-admin/manage-provincial-education-offices'}
                name={'Provincial Education Offices'}
                image={PEoMs}
                activeImage={activePEoMs}
                isActive={activeButton === 'ProvincialEducationOffices'}
                onClick={() => handleButtonClick('ProvincialEducationOffices')}
            />
            <SideNavBarButton
                path={'/ministry-education-offices-admin/manage-exam'}
                name={'Exam'}
                image={exams}
                activeImage={activeExams}
                isActive={activeButton === 'Exam'}
                onClick={() => handleButtonClick('Exam')}
            />
            <SideNavBarButton
                path={'/ministry-education-offices-admin/manage-users'}
                name={'Users'}
                image={users}
                activeImage={activeUsers}
                isActive={activeButton === 'Users'}
                onClick={() => handleButtonClick('Users')}
            />
        </nav>
    );
};
