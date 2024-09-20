// Auto Generated Typescript Model interface

import { Games } from "./Games";

export interface GameDetails  // changed GameDetail::GameDetails
{
    GameDetailId? : string;
    Name? : string;
    GameLoadingScreen? : string;
    Value? : string;
    Color? : string;
    Game? : string;
    GameIsActive? : boolean;
    GameIsDisabled? : boolean;
    
    GameDetails_Games : Games[];
    
}
