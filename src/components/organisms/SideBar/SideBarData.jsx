import LaptopWindowsIcon from '@mui/icons-material/LaptopWindows';
import GroupsIcon from '@mui/icons-material/Groups';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import PersonIcon from '@mui/icons-material/Person';
const SideBarData = [
    {
        navPath: "/",
        icon: <LaptopWindowsIcon fontSize='small'></LaptopWindowsIcon>,
        labelName: "Units",
    },
    {
        navPath: "/people",
        icon: <GroupsIcon fontSize='small'></GroupsIcon>,
        labelName: "People",
    },
    {
        navPath: "/statistics",
        icon: <AssessmentSharpIcon fontSize='small' />,
        labelName: "Reports",
    },
    {
        navPath: "/settings",
        icon: <PersonIcon fontSize='small' />,
        labelName: "Settings",
    }];
export default SideBarData;