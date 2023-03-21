export default function getPreviousScreen(location) {
    let previousScreen = "";

    if (location !== undefined && location !== null) {
        let {state} = location;
        
        if (state !== undefined && state !== null) {
            let {pageName} = state;

            if (pageName !== undefined && pageName !== null) {
                previousScreen = pageName;
            }
        }
    }

    return previousScreen;
}