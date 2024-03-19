import React from 'react';

type BaseHeaderState = object;

interface BaseHeaderActions {}

type BaseHeaderProps = BaseHeaderState & BaseHeaderActions;

export default function BaseHeader({}: BaseHeaderProps) {
    return <></>;
}
