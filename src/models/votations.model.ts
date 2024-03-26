export type VotesModel = {
    from_id: string;
    value: string;
}
export interface Votations extends Document{
    image: string;
    title: string;
    description: string;
    options: string[];
    timeStart: string;
    timeEnd: string;
    votes: VotesModel[],
    from_id: string;
}
/*
{
    "image": "", 
    "title": "¿Que tanto te gusta votar?",
    "description": "",
    "options": [
        "Mucho",
        "Poco", 
        "Medio"
    ],
    "timeStart", 
}
*/