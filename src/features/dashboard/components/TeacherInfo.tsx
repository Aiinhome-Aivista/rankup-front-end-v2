import EmailIcon from "@mui/icons-material/Email";
import MaleTeacherIcon from "@/assets/icons/male-teacher-icon.svg";
import FemaleTeacherIcon from "@/assets/icons/female-teacher-icon.svg";
import MailIcon from "@/assets/icons/mail.svg";

const TeacherInfo = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Ravi Krishnamurthi",
      subject: "Mathematics | 10th Grade",
      avatar: MaleTeacherIcon,
    },
    {
      id: 2,
      name: "Dr. Anindita Ray",
      subject: "Science | 8th Grade",
      avatar: FemaleTeacherIcon,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="flex  items-center p-3 bg-[#514CF105] rounded-xl gap-6"
          >
            <div className=" flex items-center justify-center mb-2">
              <img src={teacher.avatar} alt="" className="w-12 h-12" />
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-semibold text-[#514CF1] mb-0.5">
                {teacher.name}
              </h4>
              <p className="text-[10px] text-[#514CF1] mb-2">
                {teacher.subject}
              </p>
              <button className="flex items-center justify-center">
                <img src={MailIcon} alt="" className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeacherInfo;
