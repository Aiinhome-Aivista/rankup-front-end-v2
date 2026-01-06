import { useTheme } from "@rankup/shared-ui";
import { Mail } from "lucide-react";
import Teacher1 from "../../../assets/Teacher1.svg";
import Teacher2 from "../../../assets/Teacher2.svg";

const teachers = [
    {
        name: "Dr. Ravi Krhishnamurthi",
        role: "Mathematics | 10th Grade",
        avatar: Teacher1,
    },
    {
        name: "Dr. Anindita Ray",
        role: "Science | 6th Grade",
        avatar: Teacher2,
    },
    {
        name: "Mr. Kritar Gopinant",
        role: "Coordinator",
        avatar: Teacher1,
    }
]

const TeacherContactInfo = () => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold" style={{ color: theme.colors.text.default }}>
                Teacher Contact Information
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {teachers.map((teacher, idx) => (
                    <div
                        key={idx}
                        className="min-w-75 flex-1 rounded-3xl p-4 flex items-center gap-4 relative"
                        style={{ backgroundColor: theme.colors.bg.card }}
                    >
                        <img src={teacher.avatar} alt={teacher.name} className="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <h4 className="text-base font-bold" style={{ color: theme.colors.text.default }}>{teacher.name}</h4>
                            <p className="text-sm text-[#514BF2] mb-1 font-medium">{teacher.role}</p>
                            <div className="w-6 h-6 rounded bg-[#514BF2] flex items-center justify-center cursor-pointer hover:opacity-90">
                                <Mail size={12} className="text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeacherContactInfo;
