import os from "os"; // Importing the built-in OS module

// Returns the operating system type (e.g., 'Windows_NT', 'Linux', 'Darwin')
console.log("OS Type:", os.type());

// Returns the platform (e.g., 'win32', 'linux', 'darwin' for Mac)
console.log("Platform:", os.platform());

// Returns CPU architecture (e.g., 'x64', 'arm')
console.log("Architecture:", os.arch());

// Returns the computer's hostname
console.log("Hostname:", os.hostname());

// Returns the OS version or release number
console.log("Release:", os.release());

// Returns system uptime (in hours) -> uptime in seconds divided by 3600
console.log("Uptime (hours):", os.uptime() / 3600);

// Returns information about the current logged-in user (username, home directory, etc.)
console.log("User Info:", os.userInfo());

// Returns an array of CPU details (model, speed, cores info)
console.log("CPU Cores:", os.cpus().length); // Total number of CPU cores

// Returns free memory available (in MB)
console.log("Free Memory (MB):", os.freemem() / 1024 / 1024);

// Returns total system memory (in MB)
console.log("Total Memory (MB):", os.totalmem() / 1024 / 1024);

// Returns the home directory of the current user
console.log("Home Directory:", os.homedir());

// Returns network interfaces (IP addresses, MAC, etc.)
console.log("Network Interfaces:", os.networkInterfaces());
