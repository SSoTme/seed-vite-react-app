// Auto Generated Typescript Model interface

import { Games } from "./Games";

export interface Characters  // changed Character::Characters
{
    CharacterId? : string;
    Name? : string;
    Avatar? : string;
    Type? : string;
    Description? : string;
    IntroducedAtLevel? : number;
    Game? : string;
    GameIsActive? : boolean;
    
    Characters_Games : Games[];
    
}
