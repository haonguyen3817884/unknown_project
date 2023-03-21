export default function isMovedFromScreen(previousPage, location) {
    let isMoved = true;

        if (location === undefined || location === null) {
            isMoved = false;
        } else {
            let {state} = location;
            
            if (state === undefined || state === null) {
                isMoved = false;
            } else {
                let {pageName} = state;

                if (pageName === undefined || pageName === null) {
                    isMoved = false;
                } else {
                    if (pageName !== previousPage) {
                        isMoved = false;
                    }
                }
            }
        }

        return isMoved;
}