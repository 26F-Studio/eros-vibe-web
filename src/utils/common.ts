import { globalI18n } from 'boot/i18n';

export const i18nSubPath =
  (baseName: string) =>
  (relativePath: string, data?: Record<string, unknown>) => {
    if (data) {
      return globalI18n.t(`${baseName}.${relativePath}`, data);
    } else {
      return globalI18n.t(`${baseName}.${relativePath}`);
    }
  };

export const i18nCommon = i18nSubPath('common');

export const readFileText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target?.result as string);
    reader.onerror = () => reject(reader.error ?? new Error('Unknown file read error'));
    reader.readAsText(file);
  });
};

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
