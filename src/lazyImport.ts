import {lazy} from 'react';

/**
 * React Lazy needs to live in the root src
 * as it checks relative paths based on its location
 */
const lazyImport = (
    primaryFile: string,
    backupFile: string,
    filter: () => Promise<boolean>
) =>
    lazy(() =>
        Promise.resolve(filter()).then(currentFilter => {
            return currentFilter
                ? import(`${primaryFile}`)
                : import(`${backupFile}`);
        })
    );

export default lazyImport;
