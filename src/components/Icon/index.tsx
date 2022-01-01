import React from "react";
import * as icons from "react-native-feather";

export type IconName = keyof typeof icons;

export type IconProps = {
    name?: IconName;
} & React.ComponentProps<typeof icons[IconName]>;

const Icon: React.FC<IconProps> = ({
    name,
    ...rest
}) => {
    const IconComponent = name ? icons[name] : icons.HelpCircle;
    return <IconComponent {...rest} />;
}

export default Icon;