import addons from '@storybook/addons'
import { create } from '@storybook/theming/create'

addons.setConfig({
    theme: create({
        brandTitle: '123'
    })
})