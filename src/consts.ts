export type CollectionName = "blog" | "projects" | "talks";


export type GlobalSite = {
  title: string;
  description: string;
  author: string;
  authorPhotoSrc: string;
  logo?: {
    darkThemeSrc?: string;
    lightThemeSrc?: string;
  };
};

export const GLOBAL: GlobalSite = {
  title: "Mike Maitoza",
  description: "iOS Developer, Musician, Web Developer and Podcaster",
  author: "Mike Maitoza",
  authorPhotoSrc: "/mikey4.jpg",
  logo: {
    darkThemeSrc: "/logo-dark.svg",
    lightThemeSrc: "/logo-light.svg",
  },
};


type CollectionSite =  {
  pageSize: number;
};

type HomeSite =  {
  blogEntries?: number;
  projectEntries?: number;
  talkEntries?: number;
}

export const HOME: HomeSite = {
  blogEntries: 5,
  projectEntries: 3,
  talkEntries: 3,
};

type BlogSite = CollectionSite & {
  license: {
    name: string;
    href: string;
  }
};

export const BLOG: BlogSite = {
  pageSize: 10,
  license: {
    name: "CC BY-NC-ND 4.0",
    href: "https://creativecommons.org/licenses/by-nc-nd/4.0",
  },
};

export const PROJECTS: CollectionSite = {
  pageSize: 10,
};

export const TALKS: CollectionSite = {
  pageSize: 10,
};

export const TAGS: CollectionSite = {
  pageSize: 10,
};

type ContactInfo = {
  type: string;
  href: string;
  displayAs?: string;
}

type ContactSite = ContactInfo[]

export const CONTACT: ContactSite = [
  {
    type: "Email",
    href: "mailto:mikemaitoza@gmail.com",
    displayAs: "mikemaitoza@gmail.com",
  },
  {
    type: "X",
    href: "https://x.com/mikemaitoza1",
    displayAs: "@mikemaitoza1 on X",
  },
  {
    type: "GitHub",
    href: "https://github.com/mmaitoza",
  },
  {
    type: "LinkedIn",
    href: "https://www.linkedin.com/in/mmaitoza/",
  }
];
