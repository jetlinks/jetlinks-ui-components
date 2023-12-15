import { inject } from "vue"

export const useMap = (): sxii.Map | null => {
    return inject('map')
}