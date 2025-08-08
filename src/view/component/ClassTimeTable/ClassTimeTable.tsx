import React from "react";

interface TimeTableRow {
    period: number;
    slots: {
        subject: string;
        teacher: string;
    }[];
}

interface ClassTimeTableProps {
    table: TimeTableRow[];
}

export const ClassTimeTable = ({ table }: ClassTimeTableProps) => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    return (
        <div className="w-full border rounded-lg overflow-hidden">
            {/* Table header */}
            <div className="flex bg-black text-white font-semibold text-center">
                <div className="w-[60px] border-r p-2">Period</div>
                {days.map((day, index) => (
                    <div key={index} className="flex-1 border-r p-2">{day}</div>
                ))}
            </div>

            {/* Table body with interval row after Period 4 */}
            {table.map((row, index) => (
                <React.Fragment key={index}>
                    {/* Normal timetable row */}
                    <div
                        className={`flex text-center bg-white border-t`}
                    >
                        <div className="w-[60px] border-r p-2 flex items-center justify-center font-semibold">
                            {row.period}
                        </div>

                        {row.slots.map((slot, i) => (
                            <div key={i} className="flex-1 border-r p-2">
                                <div className="font-semibold">{slot.subject}</div>
                                <div className="text-sm text-gray-600">{slot.teacher}</div>
                            </div>
                        ))}
                    </div>

                    {/* Insert interval after Period 4 */}
                    {row.period === 4 && (
                        <div className="flex text-center bg-yellow-200 font-semibold border-t">
                            <div className="w-[60px] border-r p-2 flex items-center justify-center">
                                ⏰
                            </div>
                            <div className="flex-1 p-2 col-span-5 text-center" style={{ flex: 5 }}>
                                Interval / Break Time
                            </div>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
