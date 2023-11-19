import fs from "fs-extra";

export default function copyFilesPlugin(options) {
  return {
    name: "copy-files",
    generateBundle() {
      if (Array.isArray(options.filesPath)) {
        options.filesPath.forEach(({ src, dest }) => {
          try {
            fs.copySync(src, dest);
            console.log(`File copied successfully from ${src} to ${dest}`);
            return;
          } catch (error) {
            console.error(
              `Error copying file from ${src} to ${dest}: ${error}`
            );
            return;
          }
        });
      } else {
        console.error("Invalid filesPath format. Expected an array.");
        return;
      }
    },
  };
}
