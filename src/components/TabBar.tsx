import { NavLink } from "react-router-dom";
import { IconHome, IconIndex, IconIntro, IconSurahs } from "./Icons.tsx";

const TABS = [
  { to: "/", label: "Home", icon: <IconHome />, end: true },
  { to: "/surahs", label: "Sūrahs", icon: <IconSurahs />, end: false },
  { to: "/index", label: "Index", icon: <IconIndex />, end: false },
  { to: "/introduction", label: "Introduction", icon: <IconIntro />, end: false },
];

export function TabBar() {
  return (
    <nav className="tabbar" aria-label="Sections">
      {TABS.map((t) => (
        <NavLink key={t.to} to={t.to} end={t.end} className={({ isActive }) => `tab${isActive ? " is-active" : ""}`}>
          {t.icon}
          <span>{t.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
