<docs>
---
order: 2
title: 代码提示注册
---

支持动态提示添加

</docs>

<template>
    <j-monaco-editor
        language="javascript"
        :registrationTips="registrationTips"
        :registrationTypescript="registrationTypescript"
    />
</template>

<script setup>
import { ref } from 'vue';

const registrationTips = ref();
const registrationTypescript = ref();
const setRegistrationTips = () => {
    setTimeout(() => {
        registrationTips.value = {
            name: 'javascript',
            suggestions: [
                {
                    label: 'is eq [列名 eq 值] 等于条件',
                    documentation: '等于条件',
                    insertText: '${1:column} eq ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'not [列名 not 值] 不等于条件',
                    documentation: '不等于条件',
                    insertText: '${1:column} not ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'gt [列名 gt 值] 大于条件',
                    documentation: '大于条件',
                    insertText: '${1:column} gt ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'lt [列名 lt 值] 小于条件',
                    documentation: '小于条件',
                    insertText: '${1:column} lt ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'gte [列名 gte 值] 大于等于条件',
                    documentation: '大于等于条件',
                    insertText: '${1:column} gte ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'lte [列名 lte 值] 小于等于条件',
                    documentation: '小于等于条件',
                    insertText: '${1:column} lte ${2:value} ',
                    kind: 18,
                },
                {
                    label: 'like [列名 like 值] 模糊匹配条件',
                    documentation: '模糊匹配条件',
                    insertText: '${1:column} like "%${2:value}%" ',
                    kind: 18,
                },
                {
                    label: 'not like [列名 nlike 值] 模糊匹配条件',
                    documentation: '模糊匹配条件',
                    insertText: '${1:column} nlike "%${2:value}%" ',
                    kind: 18,
                },
                {
                    label: 'in [列名 in (值,值)]  in条件',
                    documentation: 'in条件',
                    insertText: '${1:column} in (${2:value},${3:value}) ',
                    kind: 18,
                },
                {
                    label: 'not in [列名 nin (值,值)] nin条件',
                    documentation: 'nin条件',
                    insertText: '${1:column} nin (${2:value},${3:value}) ',
                    kind: 18,
                },
                {
                    label: 'is null [列名 isnull] is null条件',
                    documentation: 'is null条件',
                    insertText: '${1:column} isnull ',
                    kind: 18,
                },
                {
                    label: 'not null [列名 notnull] not null条件',
                    documentation: 'not null条件',
                    insertText: '${1:column} notnull ',
                    kind: 18,
                },
                {
                    label: 'empty [列名 = ""] empty条件',
                    documentation: 'empty条件',
                    insertText: '${1:column} empty true ',
                    kind: 18,
                },
                {
                    label: 'not empty [列名 != ""] nempty条件',
                    documentation: 'nempty条件',
                    insertText: '${1:column} nempty true ',
                    kind: 18,
                },
                {
                    label: 'btw [列名 btw (值,值)] between条件',
                    documentation: 'between条件',
                    insertText: '${1:column} btw (${2:value},${3:value}) ',
                    kind: 18,
                },
                {
                    label: '属性: director, 名称: 导演, 类型: string',
                    documentation: '实体属性',
                    insertText: 'director',
                    kind: 18,
                },
                {
                    label: '属性: rated, 名称: 分级, 类型: string',
                    documentation: '实体属性',
                    insertText: 'rated',
                    kind: 18,
                },
                {
                    label: '属性: name, 名称: 标题, 类型: string',
                    documentation: '实体属性',
                    insertText: 'name',
                    kind: 18,
                },
                {
                    label: '属性: year, 名称: 年代, 类型: int',
                    documentation: '实体属性',
                    insertText: 'year',
                    kind: 18,
                },
                {
                    label: '属性: awards, 名称: 获奖, 类型: int',
                    documentation: '实体属性',
                    insertText: 'awards',
                    kind: 18,
                },
                {
                    label: '属性: a, 名称: jetlinks-a, 类型: int',
                    documentation: '实体属性',
                    insertText: 'a',
                    kind: 18,
                },
                {
                    label: '属性: b, 名称: jetlins-b, 类型: int',
                    documentation: '实体属性',
                    insertText: 'b',
                    kind: 18,
                },
            ],
        };

        registrationTypescript.value = {
            name: 'test',
            typescript:
                'declare namespace reactor.core.publisher {\n\n    export class Publisher<T> {\n    }\n\n    export class Mono<T> extends Publisher<T> {\n\n        static just<T>(value: T): Mono<T>;\n\n        static justOrEmpty<T>(value: T): Mono<T>;\n\n        static empty<T>(): Mono<T>;\n\n        static zip<A, B, T>(left: Mono<A>, right: Mono<B>, converter: (a: A, b: B) => T): Mono<T>;\n\n        map<U>(transfer: (val: T) => U): Mono<U>;\n\n        flatMap<U>(transfer: (val: T) => Mono<U>): Mono<U>;\n\n        filter(predicate: (val: T) => boolean): Mono<T>;\n\n        filterWhen(predicate: (val: T) => Mono<boolean>): Mono<T>;\n\n        hasElement(): Mono<boolean>;\n\n        flux(): Flux<T>;\n\n        then(): Mono<void>;\n\n        then<T>(t: Mono<T>): Mono<T>;\n\n        thenReturn<U>(t: U): Mono<U>;\n\n        thenMany<U>(t: Mono<U> | Flux<U>): Flux<U>;\n\n        //  block(): T;\n\n    }\n\n    export class Flux<T> extends Publisher<T> {\n        static just<T>(...args: any): Flux<T>;\n\n        map<U>(transfer: (val: T) => U): Flux<U>;\n\n        flatMap<U>(transfer: (val: T) => Flux<U> | Mono<U>): U;\n\n        filter(predicate: (val: T) => boolean): Flux<T>;\n\n        filterWhen(predicate: (val: T) => Mono<boolean>): Flux<T>;\n\n        hasElements(): Mono<boolean>;\n\n        then(): Mono<void>;\n\n        then<U>(t: Mono<U>): Mono<U>;\n    }\n\n}\ndeclare module java.lang {\n    class JavaNumber extends Number {\n        byteValue(): byte;\n\n        shortValue(): short;\n\n        intValue(): int;\n\n        longValue(): long;\n\n        floatValue(): float;\n\n        doubleValue(): double;\n    }\n\n    class Character {\n    }\n\n    class Byte extends JavaNumber {\n    }\n\n    class Short extends JavaNumber {\n    }\n\n    class Integer extends JavaNumber {\n    }\n\n    class Long extends JavaNumber {\n    }\n\n    class Double extends JavaNumber {\n    }\n\n    class Float extends JavaNumber {\n    }\n\n}\n\ndeclare module java.math {\n\n    enum RoundingMode {\n        UP,\n        DOWN,\n        CEILING,\n        FLOOR,\n        HALF_UP,\n        HALF_DOWN,\n        HALF_EVEN,\n        UNNECESSARY\n    }\n\n    /**\n     * 高精度数字类\n     */\n    class BigDecimal extends java.lang.JavaNumber {\n\n        /**\n         * 创建一个新的BigDecimal\n         * @param value string | double | int | long\n         */\n        constructor(value: string | double | int | long);\n\n        /**\n         * 根据long或者double值创建一个BigDecimal\n         * @param val value\n         */\n        static valueOf(val: long | double): java.math.BigDecimal;\n\n\n        /**\n         * 加法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.add(anotherBigDecimal);\n         *\n         * @param augend 加数\n         */\n        add(augend: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 减法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.subtract(anotherBigDecimal);\n         *\n         * @param subtrahend 减数\n         */\n        subtract(subtrahend: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 乘法运算,并返回新的 BigDecimal.\n         *\n         * bigDecimal = bigDecimal.multiply(anotherBigDecimal);\n         *\n         * @param multiplicand 乘数\n         */\n        multiply(multiplicand: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 除法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.divide(anotherBigDecimal,2,java.math.RoundingMode.HALF_UP);\n         *\n         * @param divisor 除数\n         * @param scale 保留小数位数\n         * @param roundMod 保留小数位数的方式\n         */\n        divide(divisor: java.math.BigDecimal, scale: int, roundMod: java.math.RoundingMode): java.math.BigDecimal;\n\n        /**\n         * 返回当前 BigDecimal 的精度.\n         */\n        scale(): int;\n\n        /**\n         * 设置 BigDecimal 的精度,并返回新的BigDecimal.\n         * @param scale 保留小数位数\n         */\n        setScale(scale: int): java.math.BigDecimal;\n\n        /**\n         * 设置 BigDecimal 的精度,并返回新的BigDecimal.\n         * @param scale 保留小数位数\n         * @param roundMod  保留小数位数的方式\n         */\n        setScale(scale: int, roundMod: java.math.RoundingMode): java.math.BigDecimal;\n    }\n}\n\n/**\n * 8位整数\n */\ndeclare interface byte extends java.lang.Byte {\n}\n\n/**\n * 16位整数\n */\ndeclare interface short extends java.lang.Short {\n}\n\n/**\n * 单字符\n */\ndeclare interface char extends java.lang.Character {\n}\n\n/**\n * 32位整数\n */\ndeclare interface int extends java.lang.Integer {\n}\n\n/**\n * 64位整数\n */\ndeclare interface long extends java.lang.Long {\n}\n\n/**\n * 32位浮点数\n */\ndeclare interface float extends java.lang.Float {\n}\n\n/**\n * 64位浮点数\n */\ndeclare interface double extends java.lang.Double {\n}\n\n\ndeclare module java.util {\n\n    class Map<K, V> {\n        get(key: K): V | null;\n\n        getOrDefault(key: K, defaultValue: V): V;\n\n        put(key: K, value: V): void;\n\n        putIfAbsent(key: K, value: V): void;\n\n        remove(key: K): V | null;\n\n        forEach(call: (key: K, value: V) => void): void\n\n\n    }\n\n    class List<E> {\n        size(): number;\n\n        add(element: E): void;\n\n        addAll(lst: List<E>): void;\n\n        remove(element: E): void;\n\n        forEach(callback: (element: E) => void): void;\n    }\n\n    class HashMap<K, V> extends Map<K, V> {\n\n    }\n\n\n    class ArrayList<E> extends List<E> {\n\n    }\n\n    class Optional<T> {\n\n        static of<T>(val: T): Optional<T>;\n\n        static ofNullable<T>(val: T): Optional<T>;\n\n        filter(call: (value: T) => boolean): T;\n\n        map<U>(call: (value: T) => U | null): U;\n\n        flatMap<U>(call: (value: T) => Optional<U>): U;\n\n        orElse<T>(defaultValue: T | null): T\n\n        orElseGet(call: () => T): T;\n    }\n\n}\n\n\n\n/**\n * SQL执行脚本帮助器\n *\n * @example helper\n * .doOnBefore(ctx=>{\n *\n * }\n */\ndeclare var helper: MongodbSelectHelper;\n\n/**\n * 查询前上下文\n */\ndeclare interface SelectBeforeContext {\n\n    /**\n     * 文档的集合\n     */\n    collector(): string;\n\n    /**\n     * 参数信息\n     */\n    parameters(): java.util.Map<string, object>;\n\n    /**\n     * 获取原始条件（JSON）\n     */\n    nativeExpression(): string;\n\n    /**\n     * 更新即将执行的条件（JSON）\n     */\n    setNativeExpression(sql: string): string;\n\n    /**\n     * 获取查询的列\n     */\n    field(): Array<string>;\n\n    /**\n     * 设置查询的列\n     */\n    setField(field: Array<string>): string;\n\n    /**\n     * 设置全局sql查询语句\n     */\n    setSql(dsl: string): string;\n\n}\n\n/**\n * 查询结果上下文\n */\ndeclare interface SelectResultContext {\n\n    /**\n     * 查询的单条结果\n     */\n    result(): java.util.Map<string, object>;\n\n}\n\ndeclare interface MongodbSelectHelper {\n\n    /**\n     * 注册执行查询前的监听器\n     * @param listener 监听器\n     */\n    doOnBefore(listener: (ctx: SelectBeforeContext) => object): MongodbSelectHelper;\n\n    /**\n     * 注册执行查询结果监听器,当执行查询后,每一行数据将被调用一次回调,用于实现填充自定义数据等操作.\n     * @param listener 监听器\n     */\n    doOnResult(listener: (ctx: SelectResultContext) => object | reactor.core.Mono<object>): MongodbSelectHelper;\n\n}\n',
        };
    }, 3000);
};

setRegistrationTips();
</script>

<style scoped></style>
