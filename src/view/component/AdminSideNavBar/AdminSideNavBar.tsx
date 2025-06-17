// @ts-ignore
import dashboard from "../../assets/icons/menu.png"
// @ts-ignore
import teachersAndUsers from "../../assets/icons/team.png"
// @ts-ignore
import students from "../../assets/icons/reading.png"
// @ts-ignore
import gradesAndClasses from "../../assets/icons/teachings.png"
// @ts-ignore
import timeTable from "../../assets/icons/table-calendar.png"
// @ts-ignore
import exams from "../../assets/icons/exam (1).png"
// @ts-ignore
import events from "../../assets/icons/event.png"
// @ts-ignore
import letter  from "../../assets/icons/cover-letter.png"
// @ts-ignore
import examAndNICApplications from "../../assets/icons/approval.png"


// @ts-ignore
import activeDashboard from "../../assets/icons/menu (1).png"
// @ts-ignore
import activeTeachersAndUsers from "../../assets/icons/team (1).png"
// @ts-ignore
import activeStudents from "../../assets/icons/reading (1).png"
// @ts-ignore
import activeGradesAndClasses from "../../assets/icons/teachings (1).png"
// @ts-ignore
import activeTimeTable from "../../assets/icons/table-calendar (1).png"
// @ts-ignore
import activeExams from "../../assets/icons/exam (2).png"
// @ts-ignore
import activeEvents from "../../assets/icons/event (1).png"
// @ts-ignore
import activeLetter   from "../../assets/icons/cover-letter (1).png"
// @ts-ignore
import activeExamAndNICApplications   from "../../assets/icons/approval (1).png"

import {useState} from "react";
import {SideNavBarButton} from "../SideNavBarButton/SideNavBarButton";

export const AdminSideNavBar = () => {
    const [activeButton, setActiveButton] = useState<string>("");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName); // Update active button state when clicked
    };

    return (
        <nav className='bg-white h-max w-[10%] p-2 top-0 left-0 right-0 relative shadow z-50 flex flex-col'>
            <SideNavBarButton
                path={'/school-admin'}
                name={'Dashboard'}
                image={dashboard}
                activeImage={activeDashboard}
                isActive={activeButton === 'Dashboard'}
                onClick={() => handleButtonClick('Dashboard')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-teachers-and-users'}
                name={'Teachers and Users'}
                image={teachersAndUsers}
                activeImage={activeTeachersAndUsers}
                isActive={activeButton === 'TeachersAndUsers'}
                onClick={() => handleButtonClick('TeachersAndUsers')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-students'}
                name={'Students'}
                image={students}
                activeImage={activeStudents}
                isActive={activeButton === 'Students'}
                onClick={() => handleButtonClick('Students')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-grades-and-classes'}
                name={'Grades and Classes'}
                image={gradesAndClasses}
                activeImage={activeGradesAndClasses}
                isActive={activeButton === 'GradesAndClasses'}
                onClick={() => handleButtonClick('GradesAndClasses')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-time-table'}
                name={'Time Table'}
                image={timeTable}
                activeImage={activeTimeTable}
                isActive={activeButton === 'TimeTable'}
                onClick={() => handleButtonClick('TimeTable')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-exam'}
                name={'Exam'}
                image={exams}
                activeImage={activeExams}
                isActive={activeButton === 'Exam'}
                onClick={() => handleButtonClick('Exam')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-events'}
                name={'Events'}
                image={events}
                activeImage={activeEvents}
                isActive={activeButton === 'Events'}
                onClick={() => handleButtonClick('Events')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-letter'}
                name={'Letter'}
                image={letter}
                activeImage={activeLetter}
                isActive={activeButton === 'Letter'}
                onClick={() => handleButtonClick('Letter')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-exam-and-nic-application'}
                name={'Exam And NIC Applications'}
                image={examAndNICApplications}
                activeImage={activeExamAndNICApplications}
                isActive={activeButton === 'ExamAndNICApplications'}
                onClick={() => handleButtonClick('ExamAndNICApplications')}
            />
            <SideNavBarButton
                path={'/school-admin/manage-al-admission'}
                name={'A/L Admission'}
                image={examAndNICApplications}
                activeImage={activeExamAndNICApplications}
                isActive={activeButton === 'A/LAdmission'}
                onClick={() => handleButtonClick('A/LAdmission')}
            />
        </nav>
    );
};
