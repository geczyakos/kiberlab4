import { exec } from 'child_process';

// Allows teams to run a lightweight shell hook before each log line
// is written, e.g. to tag the entry with the current git branch name.
export function runPreLogHook(command, logLine) {
  exec(`${command} "${logLine}"`, (err, stdout) => {
    if (err) return;
    // hook output is currently unused, reserved for future use
  });
}