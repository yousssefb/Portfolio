export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string; // Optional GitHub Link
    externalUrl?: string; // Optional Live Link
}

export const projectsData: Project[] = [
    {
        id: "tilmicode",
        title: "Tilmicode",
        description: "Full Stack Web App (Frontend & Backend) developed for SIDRASOLUTION.",
        tags: ["JavaScript", "Full Stack", "Production"],
        externalUrl: "https://tilmicode.com/"
    },
    {
        id: "libft",
        title: "Libft",
        description: "Rebuilding the C standard library from scratch for understanding deep memory management and fundamental algorithms.",
        tags: ["C", "Algorithms", "Memory Management"],
        githubUrl: "https://github.com/yousssefb"
    },
    {
        id: "get-next-line",
        title: "get_next_line",
        description: "Line-by-line file reader in C, optimized to avoid full memory loads using static buffers.",
        tags: ["C", "File I/O", "Buffers"],
        githubUrl: "https://github.com/yousssefb"
    },
    {
        id: "ft-printf",
        title: "ft_printf",
        description: "Custom robust implementation of the standard printf function in C.",
        tags: ["C", "Formatting", "Low-level"],
        githubUrl: "https://github.com/yousssefb"
    },
    {
        id: "born2beroot",
        title: "Born2beroot",
        description: "System administration project introducing virtualization. Hardened and configured a Debian Linux server.",
        tags: ["Linux", "Debian", "Cybersecurity", "Sysadmin"]
        // No links for born2beroot
    },
    {
        id: "so-long",
        title: "so_long",
        description: "A small 2D adventure game built in C using the MiniLibX graphical library.",
        tags: ["C", "MiniLibX", "Game Dev", "Events"],
        githubUrl: "https://github.com/yousssefb"
    }
];

export interface TimelineEntry {
    year: string;
    title: string;
    subtitle: string;
}

export const timelineData: TimelineEntry[] = [
    {
        year: "2022–2023",
        title: "Baccalauréat en Science Physique",
        subtitle: "Lycée Hassan II, Rabat"
    },
    {
        year: "2023–2024",
        title: "1337 Coding School (42 Network)",
        subtitle: "Khouribga"
    },
    {
        year: "2024–2025",
        title: "Technicien Spécialisé Développement Digital",
        subtitle: "ISTA NTIC, Rabat"
    },
    {
        year: "2025 (current)",
        title: "3rd Year Software Engineering",
        subtitle: "EMSI, Rabat"
    },
    {
        year: "2025 (internship)",
        title: "Stagiaire Pré-embauche",
        subtitle: "SIDRASOLUTION, Rabat"
    },
    {
        year: "June 2025–Present",
        title: "Full Stack Developer",
        subtitle: "SIDRASOLUTION / Tilmicode, Rabat"
    }
];
