// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  // Define command categories
  const commandCategories: { [category: string]: string[] } = {
    'Browser': ['Google', 'Bing', 'DuckDuckGo', 'Reddit'],
    'System Commands': ['date', 'clear', 'cd', 'echo', 'ls'],
    'User Commands': ['status', 'settings', 'email','linkedin', 'projects', 'quote', 'resume', 'sudo', 'weather', 'whoami'],
    'Help Commands': ['help', 'about', 'banner', 'github'],
  };

  // Initialize the output string
  let c = 'Welcome! Here are all the available commands:\n\n';

  // Loop through each category
  for (const [category, commands] of Object.entries(commandCategories)) {
    c += `${category}:\n`; // Add the category title

    // Sort commands within the category (if needed) and display them
    const sortedCommands = commands.sort(); // Sort alphabetically within the category
    for (let i = 0; i < sortedCommands.length; i++) {
      if ((i + 1) % 7 === 0) {
        c += sortedCommands[i] + '\n';
      } else {
        c += sortedCommands[i] + ' ';
      }
    }

    // Add a newline after each category
    c += '\n\n';
  }

  return `${c}\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\nType 'about' to display summary.`;
};


// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'about' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate


// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const instagram = async (args: string[]): Promise<string> => {
  window.open('https://www.instagram.com/jerome.villxanueva/');

  return 'Opening instagram'
}
export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};  

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise< string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `\[._.]/ Hey there👋 I'm Jerome Villanueva
Welcome To My Life
Type 'help' For A List Of Available Commands.
`;
};
