<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>1231231</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>123123</td>
                    <td>123</td>
                    <td>123123</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts" setup name="JDataTable">
import { PropType } from 'vue';
import { DataEntryData } from './typing';

const props = defineProps({
    data: {
        type: Array as PropType<DataEntryData[]>,
        default: null,
    },
});
</script>
