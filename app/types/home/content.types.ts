export type HomeBenefitIconName = 'check' | 'lightning' | 'location';

export type HomeProcessStepIconName = 'chat' | 'launch' | 'staff';

export type HomeCoreServiceIconName =
  | 'admin'
  | 'commerce'
  | 'computer'
  | 'social'
  | 'support';

export type HomePageContent = {
  seo: {
    description: string;
    title: string;
  };
  hero: HomeHeroContent;
  howItWorks: HomeHowItWorksContent;
  coreServices: HomeCoreServicesContent;
};

export type HomeHeroContent = {
  actions: {
    primary: {
      label: string;
    };
    secondary: {
      label: string;
    };
  };
  badge: string;
  benefits: {
    icon: HomeBenefitIconName;
    label: string;
  }[];
  description: string;
  heading: {
    highlight: string;
    prefix: string;
  };
  image: {
    alt: string;
    src: string;
  };
  mediaCard: {
    eyebrow: string;
    title: string;
  };
};

export type HomeHowItWorksContent = {
  description: string;
  heading: string;
  steps: {
    description: string;
    icon: HomeProcessStepIconName;
    title: string;
  }[];
};

export type HomeCoreServicesContent = {
  action: {
    href: string;
    label: string;
  };
  description: string;
  heading: string;
  items: {
    description: string;
    featured?: boolean;
    icon: HomeCoreServiceIconName;
    title: string;
  }[];
};
