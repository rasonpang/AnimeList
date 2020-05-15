import { types, getSnapshot } from "mobx-state-tree"

export const TestMobx = types
.model({
    str: "1"
})
.views(self => ({
    checkStr() {
        return self.str
    }
}))
.actions(self => ({
    changeStr() {
        self.str = "asdf"
    }
}))