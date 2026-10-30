import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useT } from "../hooks/useT.tsx";
import type { MessageKey } from "../i18n/index.ts";
import { IconHome, IconIndex, IconIntro, IconSurahs, IconTranslator } from "./Icons.tsx";

const TABS: { to: string; label: MessageKey; icon: ReactNode; end: boolean }[] = [
  { to: "/", label: "tabs.home", icon: <IconHome />, end: true },
  { to: "/surahs", label: "tabs.surahs", icon: <IconSurahs />, end: false },
  { to: "/index", label: "tabs.index", icon: <IconIndex />, end: false },
  { to: "/introduction", label: "tabs.introduction", icon: <IconIntro />, end: false },
  { to: "/translator", label: "tabs.translator", icon: <IconTranslator />, end: false },
];

export function TabBar() {
  const { t } = useT();
  return (
    <nav className="tabbar" aria-label={t("tabs.aria")}>
      {TABS.map((tab) => (
        <NavLink key={tab.to} to={tab.to} end={tab.end} className={({ isActive }) => `tab${isActive ? " is-active" : ""}`}>
          {tab.icon}
          <span>{t(tab.label)}</span>
        </NavLink>
      ))}
    </nav>
  );
}
