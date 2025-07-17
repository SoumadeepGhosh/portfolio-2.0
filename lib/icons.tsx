import {
  HomeIcon,
  User2Icon,
  Code2Icon,
  FolderDotIcon,
  GraduationCapIcon,
  AwardIcon,
  MessageSquareTextIcon,
  MailIcon,
} from "lucide-react"
import type React from "react"

export type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  home: (props: IconProps) => <HomeIcon {...props} />,
  user: (props: IconProps) => <User2Icon {...props} />,
  code: (props: IconProps) => <Code2Icon {...props} />,
  folder: (props: IconProps) => <FolderDotIcon {...props} />,
  graduationCap: (props: IconProps) => <GraduationCapIcon {...props} />,
  award: (props: IconProps) => <AwardIcon {...props} />,
  messageSquare: (props: IconProps) => <MessageSquareTextIcon {...props} />,
  mail: (props: IconProps) => <MailIcon {...props} />,
}
