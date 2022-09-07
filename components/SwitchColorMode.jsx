import LightModeIcon from "@mui/icons-material/LightMode";
import { setColorMode } from "../redux/states/colorMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { Stack, Switch } from "@mui/material";

function SwitchColorMode() {
  const dispatch = useDispatch();
  const { isDark } = useSelector(state => state.colorMode);

  const handleOnChange = () =>
    dispatch(setColorMode({ isDark: !isDark, theme: isDark ? "light" : "dark" }));

  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center">
      <LightModeIcon />
      <Switch checked={isDark} onChange={handleOnChange} />
      <DarkModeIcon />
    </Stack>
  );
}

export { SwitchColorMode };
