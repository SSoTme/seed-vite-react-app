// Auto Generated Typescript Model interface

import { GameDetails } from "./GameDetails";
import { Characters } from "./Characters";

export interface Games  // changed Game::Games
{
    GameId? : string;
    Name? : string;
    LoadingScreen? : string;
    Notes? : string;
    IsActive? : boolean;
    GameDetails? : string;
    Characters? : string;
    IsDisabled? : boolean;
    
    Game_GameDetails : GameDetails[];
    Game_Characters : Characters[];
    
}
