// @ts-ignore
import dashboard from "../../assets/icons/menu.png"
// @ts-ignore
import teachersAndPrinciples from "../../assets/icons/employees.png"
// @ts-ignore
import users   from "../../assets/icons/team.png"
// @ts-ignore
import exams from "../../assets/icons/exam (1).png"
// @ts-ignore
import schools from "../../assets/icons/school (2).png"
// @ts-ignore
import examAndNICApplications from "../../assets/icons/approval.png"


// @ts-ignore
import activeDashboard from "../../assets/icons/menu (1).png"
// @ts-ignore
import activeTeachersAndPrinciples from "../../assets/icons/employees (1).png"
// @ts-ignore
import activeExams from "../../assets/icons/exam (2).png"
// @ts-ignore
import activeSchools from "../../assets/icons/school (2).png"
// @ts-ignore
import activeUsers   from "../../assets/icons/team (1).png"
// @ts-ignore
import activeExamAndNICApplications   from "../../assets/icons/approval (1).png"

import {useState} from "react";
import {SideNavBarButton} from "../SideNavBarButton/SideNavBarButton";

export const ZEoMAdminSideNavBar = () => {
    const [activeButton, setActiveButton] = useState<string>("");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName); // Update active button state when clicked
    };

    return (
        <nav className='bg-white h-screen w-[10%] p-2 top-0 left-0 right-0 relative shadow z-50 flex flex-col'>
            <SideNavBarButton
                path={'/zonal-education-offices-admin'}
                name={'Dashboard'}
                image={dashboard}
                activeImage={activeDashboard}
                isActive={activeButton === 'Dashboard'}
                onClick={() => handleButtonClick('Dashboard')}
            />
            <SideNavBarButton
                path={'/zonal-education-offices-admin/manage-teachers-and-principles'}
                name={'Teachers and Principles'}
                image={teachersAndPrinciples}
                activeImage={activeTeachersAndPrinciples}
                isActive={activeButton === 'teachersAndPrinciples'}
                onClick={() => handleButtonClick('TeachersAndPrinciples')}
            />
            <SideNavBarButton
                path={'/zonal-education-offices-admin/manage-exam'}
                name={'Exam'}
                image={exams}
                activeImage={activeExams}
                isActive={activeButton === 'Exam'}
                onClick={() => handleButtonClick('Exam')}
            />
            <SideNavBarButton
                path={'/zonal-education-offices-admin/manage-schools'}
                name={'Schools'}
                image={schools}
                activeImage={activeSchools}
                isActive={activeButton === 'Schools'}
                onClick={() => handleButtonClick('Schools')}
            />
            <SideNavBarButton
                path={'/zonal-education-offices-admin/manage-al-admission'}
                name={'A/L Admission'}
                image={examAndNICApplications}
                activeImage={activeExamAndNICApplications}
                isActive={activeButton === 'A/L Admission'}
                onClick={() => handleButtonClick('A/LAdmission')}
            />
            <SideNavBarButton
                path={'/zonal-education-offices-admin/manage-users'}
                name={'Users'}
                image={users}
                activeImage={activeUsers}
                isActive={activeButton === 'Users'}
                onClick={() => handleButtonClick('Users')}
            />
        </nav>
    );
};
