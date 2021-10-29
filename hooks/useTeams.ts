import { useQuery } from "react-query";
import axios from "axios";

type TeamResponse = {
    Teams: Team[]
}

export type Team = {
    id:number
    name:string
}

export const useGetTeams = () => useQuery("teams", async () => {
    const {data} = await axios.get<TeamResponse>("/api/teams/1")
    return data
})

export const useGetTeamsWithEmployees = () => useQuery("teamswithemployees", async () => {
    const {data} = await axios.get<TeamResponse>("/api/teams")
    return data
})

// export const useGetPlantsByURL = (url:string) => useQuery("planet", async () => await axios.get<Planet>(url))
