<template>
    <form-item no-style require label="布尔值">
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <form-item name="trueText">
                    <j-input />
                </form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <form-item name="trueValue">
                    <j-input />
                </form-item>
            </div>
        </div>
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <form-item name="falseText">
                    <j-input />
                </form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <form-item name="falseValue">
                    <j-input />
                </form-item>
            </div>
        </div>
    </form-item>
</template>

<script setup lang="ts">
import { FormItem, Input as JInput } from '../../../components'
</script>
