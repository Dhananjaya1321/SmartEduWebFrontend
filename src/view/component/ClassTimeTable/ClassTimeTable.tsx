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

            {/* Table body */}
            {table.map((row, index) => (
                <div
                    key={index}
                    className={`flex text-center ${index === 4 ? "bg-lime-400" : "bg-white"} border-t`}
                >
                    {/* Period number */}
                    <div className="w-[60px] border-r p-2 flex items-center justify-center font-semibold">
                        {row.period}
                    </div>

                    {/* Slots for each day */}
                    {row.slots.map((slot, i) => (
                        <div key={i} className="flex-1 border-r p-2">
                            <div className="font-semibold">{slot.subject}</div>
                            <div className="text-sm text-gray-600">{slot.teacher}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
