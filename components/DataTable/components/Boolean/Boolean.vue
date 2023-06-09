<template>
    <j-form-item no-style require label="布尔值">
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <j-form-item name="trueText">
                    <j-input />
                </j-form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <j-form-item name="trueValue">
                    <j-input />
                </j-form-item>
            </div>
        </div>
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <j-form-item name="falseText">
                    <j-input />
                </j-form-item>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <j-form-item name="falseValue">
                    <j-input />
                </j-form-item>
            </div>
        </div>
    </j-form-item>
</template>

<script setup lang="ts" name="Boolean"></script>
