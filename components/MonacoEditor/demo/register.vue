<docs>
---
order: 2
title: 代码提示注册
---

支持动态提示添加，`registrationTips.name` 为语言名称，suggestions中的kind根据提示类型来设置 [官方CompletionItemKind](https://microsoft.github.io/monaco-editor/typedoc/enums/languages.CompletionItemKind.html)

Method = 0,
Function = 1,
Constructor = 2,
Field = 3,
Variable = 4,
Class = 5,
Struct = 6,
Interface = 7,
Module = 8,
Property = 9,
Event = 10,
Operator = 11,
Unit = 12,
Value = 13,
Constant = 14,
Enum = 15,
EnumMember = 16,
Keyword = 17,
Text = 18,
Color = 19,
File = 20,
Reference = 21,
Customcolor = 22,
Folder = 23,
TypeParameter = 24,
User = 25,
Issue = 26,
Snippet = 27

</docs>

<template>
    <j-monaco-editor
        language="javascript"
        v-model:modelValue="value"
        :registrationTypescript="registrationTypescript"
        :init="editorInit"
    />
</template>

<script setup>
import { ref } from 'vue';
import * as monaco from 'monaco-editor';

const registrationTips = ref();
const registrationTypescript = ref();
const value = ref();
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
            name: 'typescript',
            typescript:
                '/**\n* 物模型属性\n*/\ndeclare class PropertyMetadata{\n/**\n* 变倍参数\n**/\ndeclare wZoomPos:int;\n/**\n* 垂直参数\n**/\ndeclare wTiltPos:int;\n/**\n* 水平参数\n**/\ndeclare wPanPos:int;\n/**\n* A11\n**/\ndeclare A1:int;\n\n}\ndeclare module java.lang {\n    class JavaNumber extends Number {\n        byteValue(): byte;\n\n        shortValue(): short;\n\n        intValue(): int;\n\n        longValue(): long;\n\n        floatValue(): float;\n\n        doubleValue(): double;\n    }\n\n    class Character {\n    }\n\n    class Byte extends JavaNumber {\n    }\n\n    class Short extends JavaNumber {\n    }\n\n    class Integer extends JavaNumber {\n    }\n\n    class Long extends JavaNumber {\n    }\n\n    class Double extends JavaNumber {\n    }\n\n    class Float extends JavaNumber {\n    }\n\n}\n\ndeclare module java.math {\n\n    enum RoundingMode {\n        UP,\n        DOWN,\n        CEILING,\n        FLOOR,\n        HALF_UP,\n        HALF_DOWN,\n        HALF_EVEN,\n        UNNECESSARY\n    }\n\n    /**\n     * 高精度数字类\n     */\n    class BigDecimal extends java.lang.JavaNumber {\n\n        /**\n         * 创建一个新的BigDecimal\n         * @param value string | double | int | long\n         */\n        constructor(value: string | double | int | long);\n\n        /**\n         * 根据long或者double值创建一个BigDecimal\n         * @param val value\n         */\n        static valueOf(val: long | double): java.math.BigDecimal;\n\n\n        /**\n         * 加法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.add(anotherBigDecimal);\n         *\n         * @param augend 加数\n         */\n        add(augend: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 减法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.subtract(anotherBigDecimal);\n         *\n         * @param subtrahend 减数\n         */\n        subtract(subtrahend: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 乘法运算,并返回新的 BigDecimal.\n         *\n         * bigDecimal = bigDecimal.multiply(anotherBigDecimal);\n         *\n         * @param multiplicand 乘数\n         */\n        multiply(multiplicand: java.math.BigDecimal): java.math.BigDecimal;\n\n        /**\n         * 除法运算,并返回新的 BigDecimal.\n         *\n         *  bigDecimal = bigDecimal.divide(anotherBigDecimal,2,java.math.RoundingMode.HALF_UP);\n         *\n         * @param divisor 除数\n         * @param scale 保留小数位数\n         * @param roundMod 保留小数位数的方式\n         */\n        divide(divisor: java.math.BigDecimal, scale: int, roundMod: java.math.RoundingMode): java.math.BigDecimal;\n\n        /**\n         * 返回当前 BigDecimal 的精度.\n         */\n        scale(): int;\n\n        /**\n         * 设置 BigDecimal 的精度,并返回新的BigDecimal.\n         * @param scale 保留小数位数\n         */\n        setScale(scale: int): java.math.BigDecimal;\n\n        /**\n         * 设置 BigDecimal 的精度,并返回新的BigDecimal.\n         * @param scale 保留小数位数\n         * @param roundMod  保留小数位数的方式\n         */\n        setScale(scale: int, roundMod: java.math.RoundingMode): java.math.BigDecimal;\n    }\n}\n\n/**\n * 8位整数\n */\ndeclare interface byte extends java.lang.Byte {\n}\n\n/**\n * 16位整数\n */\ndeclare interface short extends java.lang.Short {\n}\n\n/**\n * 单字符\n */\ndeclare interface char extends java.lang.Character {\n}\n\n/**\n * 32位整数\n */\ndeclare interface int extends java.lang.Integer {\n}\n\n/**\n * 64位整数\n */\ndeclare interface long extends java.lang.Long {\n}\n\n/**\n * 32位浮点数\n */\ndeclare interface float extends java.lang.Float {\n}\n\n/**\n * 64位浮点数\n */\ndeclare interface double extends java.lang.Double {\n}\n\n\ndeclare module java.util {\n\n    module stream {\n\n        class Stream<E>{\n\n        }\n\n        class Collectors{\n            static toList(): any;\n\n        }\n    }\n\n    class Map<K, V> {\n        get(key: K): V | null;\n\n        getOrDefault(key: K, defaultValue: V): V;\n\n        put(key: K, value: V): void;\n\n        putIfAbsent(key: K, value: V): void;\n\n        remove(key: K): V | null;\n\n        forEach(call: (key: K, value: V) => void): void\n\n\n    }\n\n    class List<E> extends Array<E> {\n\n        private concat(...items): E[] ;\n\n        private copyWithin(target: number, start: number, end?: number): this;\n\n        private entries(): IterableIterator<[number, E]>;\n\n        private every<S extends E>(predicate: (value: E, index: number, array: E[]) => value is S, thisArg?: any): this is S[];\n\n        private find(predicate: (value: E, index: number, obj: E[]) => boolean, thisArg?: any): E | undefined;\n\n        private findIndex(predicate: (value: E, index: number, obj: E[]) => boolean, thisArg?: any): number;\n\n        private keys(): IterableIterator<number>;\n\n        private fill(value: E, start?: number, end?: number): this;\n\n        private filter<S extends E>(predicate: (value: E, index: number, array: E[]) => value is S, thisArg?: any): S[];\n\n        private indexOf(searchElement: E, fromIndex?: number): number;\n\n        private lastIndexOf(searchElement: E, fromIndex?: number): number;\n\n        size(): number;\n\n        add(element: E): void;\n\n        addAll(lst: List<E>): void;\n\n        remove(element: E): void;\n\n        forEach(callback: (element: E) => void): void;\n    }\n\n    class HashMap<K, V> extends Map<K, V> {\n\n    }\n\n\n    class ArrayList<E> extends List<E> {\n\n    }\n\n    class Optional<T> {\n\n        static of<T>(val: T): Optional<T>;\n\n        static ofNullable<T>(val: T): Optional<T>;\n\n        filter(call: (value: T) => boolean): T;\n\n        map<U>(call: (value: T) => U | null): U;\n\n        flatMap<U>(call: (value: T) => Optional<U>): U;\n\n        orElse<T>(defaultValue: T | null): T\n\n        orElseGet(call: () => T): T;\n    }\n\n}\n\n\ndeclare module io.netty.buffer {\n\n    class Unpooled {\n        static buffer(): ByteBuf;\n\n    }\n\n    class ByteBuf {\n\n        /**\n         * 当前读到的索引\n         */\n        readerIndex(): int;\n\n\n        /**\n         * 当前写入的索引\n         */\n        writerIndex(): int;\n\n        /**\n         * 可读取的字节数\n         */\n        readableBytes(): int;\n\n        /**\n         * 可写入的字节数\n         */\n        writableBytes(): int;\n\n        /**\n         * 写入另外一个ByteBuf\n         * @param buf ByteBuf\n         */\n        writeBytes(buf: ByteBuf | byte[]): ByteBuf;\n\n        /**\n         * 读取单字节数据\n         * @return byte\n         */\n        readByte(): byte;\n\n        /**\n         * 获取指定索引的无符号单字节数据\n         * @return short\n         */\n        readUnsignedByte(): short;\n\n        /**\n         * 读取2字节数字,大端模式\n         * @return short\n         */\n        readShort(): short;\n\n        /**\n         * 读取2字节数字,小端模式\n         * @return short\n         */\n        readShortLE(): short;\n\n        /**\n         * 读取无符号2字节数字,大端模式\n         * @return int\n         */\n        readUnsignedShort(): int;\n\n        /**\n         * 读取2字节数字,小端模式\n         * @return int\n         */\n        readUnsignedShortLE(): int;\n\n\n        /**\n         * 读取3字节数字,大端模式\n         * @return int\n         */\n        readMedium(): int;\n\n        /**\n         * 读取3字节数字,小端模式\n         * @return int\n         */\n        readMediumLE(): int;\n\n        /**\n         * 读取3字节数字,大端模式\n         * @return int\n         */\n        readUnsignedMedium(): int;\n\n        /**\n         * 读取无符号3字节数字,小端模式\n         * @return int\n         */\n        readUnsignedMediumLE(): int;\n\n        /**\n         * 读取4字节数字,大端模式\n         * @return int\n         */\n        readInt(): int;\n\n        /**\n         * 读取4字节数字,小端模式\n         * @return int\n         */\n        readIntLE(): int;\n\n        /**\n         * 读取4字节数字,大端模式\n         * @return long\n         */\n        readUnsignedInt(): long;\n\n        /**\n         * 读取无符号4字节数字,小端模式\n         * @return long\n         */\n        readUnsignedIntLE(): long;\n\n        /**\n         * 获取指定索引的8字节数字,大端模式\n         * @return long\n         */\n        readLong(): long;\n\n        /**\n         * 读取8字节数字,小端模式\n         * @return long\n         */\n        readLongLE(): long;\n\n        /**\n         * 读取4字节浮点数,IEEE754编码,大端模式\n         * @return float\n         */\n        readFloat(): float;\n\n        /**\n         * 读取4字节浮点数,IEEE754编码,小端模式\n         * @return float\n         */\n        readFloatLE(): float;\n\n        /**\n         * 读取8字节浮点数,IEEE754编码,大端模式\n         * @return double\n         */\n        readDouble(): double;\n\n        /**\n         * 读取8字节浮点数,IEEE754编码,小端模式\n         * @return double\n         */\n        readDoubleLE(): double;\n\n\n        /**\n         * 获取指定索引的单字节数据\n         */\n        getByte(index: int): byte;\n\n        /**\n         * 获取指定索引的无符号单字节数据\n         */\n        getUnsignedByte(index: int): short;\n\n        /**\n         * 获取指定索引的2字节数字(short)大端模式\n         */\n        getShort(index: int): short;\n\n        /**\n         * 获取指定索引的2字节数字(short)小端模式\n         * @param index 索引,从0开始\n         * @return short\n         */\n        getShortLE(index: int): short;\n\n        /**\n         * 获取指定索引的无符号2字节数字(int)大端模式\n         * @param index 索引,从0开始\n         * @return int\n         */\n        getUnsignedShort(index: int): int;\n\n        /**\n         * 获取指定索引的无符号2字节数字,小端模式\n         * @param index 索引,从0开始\n         * @return int\n         */\n        getUnsignedShortLE(index: int): int;\n\n        /**\n         * 获取指定索引的3字节数字值,大端\n         * @param index 索引,从0开始\n         */\n        getMedium(index: int): int;\n\n        /**\n         * 获取指定索引的3字节数字值,小端\n         * @param index 索引,从0开始\n         */\n        getMediumLE(index: int): int;\n\n        /**\n         * 获取指定索引的无符号3字节数字值,大端\n         * @param index 索引,从0开始\n         */\n        getUnsignedMedium(index: int): int;\n\n        /**\n         * 获取指定索引的无符号3字节数字值,小端\n         * @param index 索引,从0开始\n         */\n        getUnsignedMediumLE(index: int): int;\n\n\n        /**\n         * 获取指定索引的无符号4字节数字,大端模式\n         * @param index 索引,从0开始\n         * @return int\n         */\n        getInt(index: int): int;\n\n        /**\n         * 获取指定索引的4字节数字,小端模式\n         * @param index 索引,从0开始\n         * @return int\n         */\n        getIntLE(index: int): int;\n\n        /**\n         * 获取指定索引的无符号4字节数字大端模式\n         * @param index 索引,从0开始\n         * @return long\n         */\n        getUnsignedInt(index: int): long;\n\n        /**\n         * 获取指定索引的无符号4字节数字小端模式\n         * @param index 索引,从0开始\n         * @return long\n         *\n         */\n        getUnsignedIntLE(index: int): long;\n\n        /**\n         * 获取指定索引的8字节数字,大端模式\n         * @param index 索引,从0开始\n         * @return long\n         */\n        getLong(index: int): long;\n\n        /**\n         * 获取指定索引的8字节数字,小端模式\n         * @param index 索引,从0开始\n         * @return long\n         */\n        getLongLE(index: int): long;\n\n        /**\n         * 获取指定索引的4字节浮点数,IEEE754编码,大端模式\n         * @param index 索引,从0开始\n         * @return float\n         */\n        getFloat(index: int): float;\n\n        /**\n         * 获取指定索引的4字节浮点数,IEEE754编码,小端模式\n         * @param index 索引,从0开始\n         * @return float\n         */\n        getFloatLE(index: int): float;\n\n        /**\n         * 获取指定索引的8字节浮点数,IEEE754编码,大端模式\n         * @param index 索引,从0开始\n         * @return double\n         */\n        getDouble(index: int): double;\n\n        /**\n         * 获取指定索引的8字节浮点数,IEEE754编码,小端模式\n         * @param index 索引,从0开始\n         * @return double\n         */\n        getDoubleLE(index: int): double;\n\n\n        ////\n\n        /**\n         * 写入单字节数据\n         */\n        writeByte(value: byte): ByteBuf;\n\n        /**\n         * 写入2字节数字(short)大端模式\n         */\n        writeShort(value: short): ByteBuf;\n\n        /**\n         * 写入2字节数字(short)小端模式\n         * @param value 值\n         */\n        writeShortLE(value: short): ByteBuf;\n\n        /**\n         * 写入3字节数字值,大端\n         * @param value 值\n         */\n        writeMedium(value: int): ByteBuf;\n\n        /**\n         * 写入3字节数字值,小端\n         * @param value 值\n         */\n        writeMediumLE(value: int): ByteBuf;\n\n        /**\n         * 写入无符号4字节数字,大端模式\n         * @param value 值\n         */\n        writeInt(value: int): ByteBuf;\n\n        /**\n         * 写入4字节数字,小端模式\n         * @param value 值\n         */\n        writeIntLE(value: int): ByteBuf;\n\n\n        /**\n         * 写入8字节数字,大端模式\n         * @param value 值\n         */\n        writeLong(value: long): ByteBuf;\n\n        /**\n         * 写入8字节数字,小端模式\n         * @param value 值\n         */\n        writeLongLE(value: long): ByteBuf;\n\n        /**\n         * 写入4字节浮点数,IEEE754编码,大端模式\n         * @param value 值\n         */\n        writeFloat(value: float): ByteBuf;\n\n        /**\n         * 写入4字节浮点数,IEEE754编码,小端模式\n         * @param value 值\n         */\n        writeFloatLE(value: float): ByteBuf;\n\n        /**\n         * 写入8字节浮点数,IEEE754编码,大端模式\n         * @param value 值\n         */\n        writeDouble(value: double): ByteBuf;\n\n        /**\n         * 写入8字节浮点数,IEEE754编码,小端模式\n         * @param value 值\n         */\n        writeDoubleLE(value: double): ByteBuf;\n    }\n\n}\n\ndeclare module org.jetlinks.core.message {\n\n    enum MessageType {\n        /**\n         * 设备上报属性\n         */\n        REPORT_PROPERTY,\n        /**\n         * 读取属性\n         */\n        READ_PROPERTY,\n        /**\n         * 修改属性\n         */\n        WRITE_PROPERTY,\n        /**\n         * 读取属性回复\n         */\n        READ_PROPERTY_REPLY,\n        /**\n         * 修改属性回复\n         */\n        WRITE_PROPERTY_REPLY,\n        /**\n         * 调用功能\n         */\n        INVOKE_FUNCTION,\n        /**\n         * 调用功能回复\n         */\n        INVOKE_FUNCTION_REPLY,\n        /**\n         * 事件上报\n         */\n        EVENT\n\n    }\n\n    interface ThingMessage<T extends ThingMessage<T>> {\n        getMessageType(): MessageType;\n\n        getThingType(): string;\n\n        getThingId(): string;\n\n        getTimestamp(): long;\n\n        getHeaders(): java.util.Map<string, any>;\n\n        getHeader(key: string): java.util.Optional<any>;\n\n        addHeader(key: string, value: string): T;\n\n        getMessageId(): string;\n\n        timestamp(utcTimestamp: long): T;\n\n        messageId(msgId: string): T;\n    }\n\n    interface ThingMessageReply<T extends ThingMessageReply<T>> extends ThingMessage<T> {\n\n        isSuccess(): boolean;\n\n        //业务码,具体由设备定义\n        getCode(): string;\n\n        //错误消息\n        getMessage(): string;\n\n        //设置失败\n        error(errorCode: string, message: string);\n\n        //设置失败\n        error(err: Error): T;\n\n        //设置物类型和物ID\n        thingId(type: string, thingId: string): T;\n\n        //设置成功\n        success(): T;\n\n        success(success: boolean): T;\n\n        //设置业务码\n        code(code: string): T;\n\n        //设置消息\n        message(message: string): T;\n\n\n        //设置消息ID\n        messageId(messageId: string): T;\n\n        //设置时间戳\n        timestamp(timestamp: number): T;\n\n\n    }\n\n    interface DeviceMessage<T extends DeviceMessage<T>> extends ThingMessage<T> {\n        /**\n         * 获取设备ID\n         */\n        getDeviceId(): string;\n\n    }\n\n    interface DeviceMessageReply<T extends DeviceMessageReply<T>> extends ThingMessageReply<T> {\n        /**\n         * 获取设备ID\n         */\n        getDeviceId(): string;\n\n    }\n\n    interface PropertyMessage {\n        getProperties(): java.util.Map<string, any>;\n\n        properties(properties: java.util.Map<string, any>): void;\n\n        propertySourceTimes(properties: java.util.Map<string, long>): void;\n\n        propertyStates(properties: java.util.Map<string, string>): void;\n\n        getProperty(propertyId: string): java.util.Optional<any>;\n\n        getPropertySourceTime(propertyId: string): java.util.Optional<number>;\n\n        getPropertyState(propertyId: string): java.util.Optional<string>;\n\n    }\n\n    interface ReportPropertyMessage extends DeviceMessage<ReportPropertyMessage>, PropertyMessage {\n\n    }\n\n    interface ReadPropertyMessage extends DeviceMessage<ReadPropertyMessage> {\n        getProperties(): java.util.List<string>;\n\n        newReply(): ReadPropertyMessageReply;\n    }\n\n    interface ReadPropertyMessageReply extends DeviceMessageReply<ReadPropertyMessageReply>, PropertyMessage {\n\n    }\n\n    interface WritePropertyMessage extends DeviceMessage<ReadPropertyMessage> {\n        getProperties(): java.util.Map<string, object>;\n\n        newReply(): WritePropertyMessageReply;\n    }\n\n    interface WritePropertyMessageReply extends DeviceMessageReply<WritePropertyMessageReply>, PropertyMessage {\n\n    }\n\n    /**\n     * 物模型功能调用消息\n     */\n    interface FunctionInvokeMessage extends DeviceMessage<FunctionInvokeMessage> {\n        /**\n         * 物模型功能ID\n         */\n        getFunctionId(): string;\n\n        /**\n         * 获取输入参数值,如:\n         * let val = message.getInput(\'val\').orElse(null);\n         * @param argKey 参数id\n         */\n        getInput(argKey: string): java.util.Optional<object>;\n\n        /**\n         * 将输入参数转为Map\n         */\n        inputsToMap(): java.util.Map<string, Object>;\n\n        /**\n         * 根据此消息创建回复消息\n         */\n        newReply(): WritePropertyMessageReply;\n    }\n\n    /**\n     * 功能调用回复,用于回复由平台下发的功能调用消息\n     */\n    interface FunctionInvokeMessageReply extends DeviceMessageReply<FunctionInvokeMessageReply> {\n        /**\n         * 获取输出数据\n         */\n        getOutput(): object;\n\n        /**\n         * 设置输出数据\n         * @param output 输出数据\n         */\n        setOutput(output: object): void;\n    }\n\n    /**\n     * 透传设备消息\n     */\n    interface DirectMessage extends DeviceMessage<DirectMessage> {\n        /**\n         * 获取透传原始数据,类型为字节数组byte[]\n         */\n        getData(): number[]\n\n        /**\n         * 将原始数据转换为netty ByteBuf\n         */\n        asByteBuf(): io.netty.buffer.ByteBuf;\n    }\n}\n\ndeclare module org.jetlinks.metadata {\n\n    class DataType {\n        getType(): string;\n    }\n\n}\ndeclare module org.jetlinks.metadata.types {\n\n    class GeoPoint extends DataType {\n        /**\n         * 经度\n         */\n        lat: float;\n\n        /**\n         * 纬度\n         */\n        lon: float;\n\n    }\n}\n\n/**\n * 操作java的相关接口\n */\ndeclare class Java {\n    /**\n     * 获取java class,如: Java.type(\'int[]\');\n     * @param clazz 类型名称\n     */\n    static type(clazz: string): object;\n}\n\ndeclare var utils: Utils;\n\n/**\n * 内置工具类\n */\ndeclare interface Utils {\n\n    /**\n     * 获取当前UTC时间戳\n     */\n    now(): long;\n\n    /**\n     * 创建java byte 数组\n     *\n     * let arr =  utils.newByteArray(8);\n     * arr[0]= 0x01;\n     *\n     * @param size 长度\n     */\n    newByteArray(size: number): byte[];\n\n    /**\n     * 创建java int 数组\n     *\n     * let arr = utils.newIntArray(8);\n     * arr[0]= 0x01;\n     *\n     * @param size 长度\n     */\n    newIntArray(size: number): int[];\n\n    /**\n     * 将js对象转为java对象\n     *\n     * utils.toJavaType({"key":"value"});//转为java.util.Map\n     *\n     * utils.toJavaType([1,2,3]);//转为java.util.List\n     *\n     * @param jsObject js对象\n     */\n    toJavaType(jsObject: object): object;\n\n    /**\n     * 对字符串进行md5摘要,返回md5 16进制字符串\n     *\n     * let md5 =  utils.md5Hex(id+"|"+timestamp);\n     *\n     * @param str 要进行md5摘要的字符串\n     */\n    md5Hex(str: string): string;\n\n    /**\n     * 对字符串进行sha1摘要,返回sha1 16进制字符串\n     *\n     * let sha1 =  utils.sha1Hex(id+"|"+timestamp);\n     *\n     * @param str 要进行sha1摘要的字符串\n     */\n    sha1Hex(str: string): string;\n\n    /**\n     * 高精度加法,返回: java.math.BigDecimal\n     *\n     * let val =  sum(value,10.23).doubleValue();\n     *\n     * @param numbers\n     */\n    sum(...numbers: number[]): java.math.BigDecimal;\n\n    /**\n     * 高精度减法,返回: java.math.BigDecimal.\n     *\n     *  let val =  sub(value,10.23).doubleValue();\n     *\n     * @param numbers\n     */\n    sub(...numbers: number[]): java.math.BigDecimal;\n\n    /**\n     * 高精度乘法,返回: java.math.BigDecimal.\n     *\n     *  let val =  mul(value,10.23).doubleValue();\n     *\n     * @param numbers\n     */\n    mul(...numbers: number[]): java.math.BigDecimal;\n\n\n    /**\n     * 高精度除法,返回: java.math.BigDecimal.\n     *\n     *  let val =  div(value,10.23).doubleValue();\n     *\n     * @param numbers\n     */\n    div(...numbers: number[]): java.math.BigDecimal;\n\n    /**\n     * 对比大小,返回最大值\n     *\n     *  let val = max(a,b,c);\n     *\n     * @param objects 要对比的值\n     */\n    max(...objects: object[]): object;\n\n    /**\n     * 对比大小,返回最小值\n     *\n     *  let val = min(a,b,c);\n     *\n     * @param objects 要对比的值\n     */\n    min(...objects: object[]): object;\n\n    /**\n     * 解析json字符串为对象\n     * @param jsonString JSON字符串\n     */\n    parseJson(jsonString: string): object;\n\n    /**\n     * 将对象转换为json字符串\n     * @param obj 对象\n     */\n    toJsonString(obj: object): string;\n}\n\n/**\n * 解码上下文,可获取设备上行数据相关信息\n */\ndeclare interface DecodeContext {\n    /**\n     * 获取设备上报的透传数据\n     */\n    getPayload(): io.netty.buffer.ByteBuf;\n\n    /**\n     * 获取设备上报消息的时间戳\n     */\n    timestamp(): number;\n\n    /**\n     * 获取原始透传消息\n     */\n    message(): org.jetlinks.core.message.DirectMessage;\n\n    /**\n     * 获取header中的url,通常在http透传时使用,需要在协议包中进行设置\n     */\n    url(): string;\n\n    /**\n     * 获取header中的topic,通常在mqtt透传时使用,需要在协议包中进行设置\n     */\n    topic(): string;\n\n    /**\n     * 解析路径中的变量信息例如:\n     *\n     *  let deviceId =  pathVars(\'/{deviceId}/#\',context.topic()).get("deviceId");\n     *\n     * @param pattern 模版\n     * @param path 路径\n     */\n    pathVars(pattern: string, path: string): java.util.Map<string, string>;\n}\n\n/**\n * 编码上下文,进行设备下行消息相关操作\n */\ndeclare interface EncodeContext {\n    /**\n     * 获取平台下发的原始消息\n     */\n    message(): org.jetlinks.core.message.W\n\n    /**\n     * 设置topic,通常在MQTT透传时使用,协议包内可通过message.getHeader("topic")获取\n     * @param topic TOPIC\n     */\n    topic(topic: string): EncodeContext;\n\n    /**\n     * 获取即将发送给设备的透传报文\n     */\n    payload(): io.netty.buffer.ByteBuf;\n\n    /**\n     * 创建新的ByteBuf,用于构造报文\n     */\n    newBuffer(): io.netty.buffer.ByteBuf;\n\n    /**\n     * 设置发送给设备的透传报文,支持传入ByteBuf和string,如果是16进制需要以0x开头\n     * @param hexString\n     */\n    setPayload(hexString: string | io.netty.buffer.ByteBuf): EncodeContext;\n\n    /**\n     * 声明当调用功能时的报文构造逻辑,如:\n     *\n     *  whenFunction(\'*\',function(args){\n     *\n     *      return "0x500120FF";\n     *  })\n     *\n     * @param functionId 物模型功能ID,如果写*则表示任意功能都会使用此逻辑\n     * @param call 构造逻辑函数\n     */\n    whenFunction(functionId: string, call: (args: java.util.Map<string, any>) => string | io.netty.buffer.ByteBuf): EncodeContext;\n\n    /**\n     * 声明当修改属性时的报文构造逻辑,如:\n     * <pre>\n     *  whenWriteProperty(\'*\',function(args){\n     *\n     *      return "0x500120FF";\n     *  })\n     *</pre>\n     * @param propertyId 物模型属性ID,如果写*则表示属性都会使用此逻辑\n     * @param call 构造逻辑函数\n     */\n    whenWriteProperty(propertyId: string, call: (value: any) => string | io.netty.buffer.ByteBuf): EncodeContext;\n\n    /**\n     * 声明当读取多个属性时的报文构造逻辑,如:\n     *\n     *  whenReadProperties(\'*\',function(properties){\n     *\n     *      return "0x500120FF";\n     *  })\n     *\n     * @param propertyId 物模型属性ID,如果写*则表示属性都会使用此逻辑\n     * @param call 构造逻辑函数\n     */\n    whenReadProperties(propertyId: string, call: (value: java.util.List<string>) => string | io.netty.buffer.ByteBuf): EncodeContext;\n\n    /**\n     * 声明当读取单个属性时的报文构造逻辑,如:\n     *\n     *  whenReadProperties(\'temp\',function(){\n     *\n     *      return "0x500120FF";\n     *  })\n     *\n     * @param propertyId 物模型属性ID,如果写*则表示属性都会使用此逻辑\n     * @param call 构造逻辑函数\n     */\n    whenReadProperty(propertyId: string, call: (value: string) => string | io.netty.buffer.ByteBuf): EncodeContext;\n\n\n}\n\n/**\n * 设备消息对象，如:\n * {\n *     "messageType":"REPORT_PROPERTY",\n *     "properties":{"temp":32.8}\n * }\n */\ndeclare class MessageMap {\n\n    /**\n     * 消息类型\n     *\n     * REPORT_PROPERTY: 属性上报\n     *\n     * EVENT: 事件上报\n     *\n     * READ_PROPERTY_REPLY: 读取属性回复\n     *\n     * WRITE_PROPERTY_REPLY: 修改属性回复\n     *\n     * FUNCTION_INVOKE_REPLY: 功能调用回复\n     *\n     */\n    messageType:\n        /**\n         * 属性上报\n         */\n        "REPORT_PROPERTY" |\n        /**\n         *  事件上报\n         */\n        "EVENT" |\n        /**\n         * 读取属性回复\n         */\n        "READ_PROPERTY_REPLY" |\n        /**\n         * 修改属性回复\n         */\n        "WRITE_PROPERTY_REPLY" |\n        /**\n         * 功能调用回复\n         */\n        "FUNCTION_INVOKE_REPLY";\n\n    /**\n     * 消息ID,如果是回复指令,需要设置为和平台下发时的一致\n     */\n    messageId: string;\n\n    /**\n     * 属性列表,当返回属性上报消息时设置\n     */\n    properties: PropertyMetadata | object;\n\n    /**\n     * 功能调用回复,当返回功能调用时设置\n     */\n    output:  object;\n\n    /**\n     * 事件ID,当返回事件上报消息时设置\n     */\n    event: string;\n\n    /**\n     * 事件数据,当返回事件上报消息时设置.\n     */\n    data: EventType | object\n}\n\ndeclare interface CodecContext {\n\n    /**\n     * 注册设备上行数据监听器,当设备上行数据时,回调将被调用,用于解析设备上报的数据.\n     * @param call 回调函数\n     */\n    onUpstream(call: (context: DecodeContext) => MessageMap): CodecContext;\n\n    /**\n     * 注册设备下行数据监听器,当平台下发指令给设备时,回调将被调用,用于构造下发给设备的报文\n     * @param call 回调函数\n     */\n    onDownstream(call: (context: EncodeContext) => void): CodecContext;\n\n\n}\n\n/**\n * 透传消息编解码内置变量,用于注册上下行监听器等操作\n */\ndeclare var codec: CodecContext\n',
        };
    }, 3000);
};

setRegistrationTips();

const editorInit = (editor, monaco) => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: false,
    });

    // compiler options
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        allowJs: true,
        checkJs: true,
        allowNonTsExtensions: true,
        target: monaco.languages.typescript.ScriptTarget.ESNext,
        strictNullChecks: false,
        strictPropertyInitialization: true,
        strictFunctionTypes: true,
        strictBindCallApply: true,
        useDefineForClassFields: true, //permit class static fields with private name to have initializer
        moduleResolution:
            monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        typeRoots: ['types'],
        lib: ['esnext'],
    });
};
</script>

<style scoped></style>
