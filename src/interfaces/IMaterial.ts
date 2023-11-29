import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";


export type IMuiIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
};