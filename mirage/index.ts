import { createServer, Model,Factory, belongsTo, hasMany } from "miragejs"

export const useMirage = () => createServer({
    models: {
        team: Model.extend({
            employees: hasMany()
        }),
        employee: Model.extend({
            team: belongsTo()
        })
    },
    // factories: {
    //     team: Factory.extend({
    //         name(i:number) {
    //             return `Team ${i}`
    //         }
    //     }),
    //     employee: Factory.extend({
    //         name(i:number) {
    //             return `Mitarbeiter ${i}`
    //         }
    //     }),
    // },
    routes() {
        this.namespace = "api"

        this.get("/teams")
        // this.get("/teams/:id")
        // this.post("/teams")
        // this.patch("/teams/:id")
        // this.del("/teams/:id")

        this.get("/teams/:id/employees")
        // this.get("/teams/:id")
        // this.post("/teams")
        // this.patch("/teams/:id")
        // this.del("/teams/:id")
    
        this.get("/employees")
        this.get("/employees/:id")
        this.post("/employees")
        this.patch("/employees/:id")
        this.del("/employees/:id")
    },
    seeds(server) {

        server.createList("team", 3).forEach((team) => {server.createList("employee", 10, {team:team})})
      },
  })