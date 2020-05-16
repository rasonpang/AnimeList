import { types, getSnapshot } from "mobx-state-tree"

export const TestMobx = types
.model({
    myName: "rason",
    clicked: 0
})
.views(self => ({
    showName() {
        return self.myName
    },
    showClicks() {
        return self.clicked
    }
}))
.actions(self => ({
    changeName() {
        self.myName = (self.myName === "rason") ? "Mofu" : "rason"
    },
    changeClick() {
        self.clicked += 1
    }
}))