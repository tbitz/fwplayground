import * as React from 'react';
type Props = {

};
export function Hero({ heroName }: { heroName: string }) {
    if (heroName === "Joker") {
        //throw new Error(heroName + " is not a hero!")
    }
    return (
        <div>
            {heroName}
        </div>
    );
};