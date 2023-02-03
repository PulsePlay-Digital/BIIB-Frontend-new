export interface MenuType {
    name: string;
    opened?: boolean;
    url?: string;
    children?: Array<MenuItem>;
  }

  export interface MenuItem {
    name: string;
    subtitle?: string;
    url?: string;
    children?: Array<MenuItem>;
    parentUrl?: string;
    callback?: string | Function;
    disabled?: boolean;
  }