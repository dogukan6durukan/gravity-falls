export interface Routes {
    client : {
        home? : string | null
        about? : string | null
        docs? : string | null
        githubowner? : string | null
        projectsource?: string | null
    }

    server : {
        base : string | null
        allCharacters : string | null
        singleCharacter : string | null
        filterByOne : string | null
        filterByNameAndEpisode : string | null
        paginateByOne : string | null
        paginateAllCharacters : string | null
    }
}

