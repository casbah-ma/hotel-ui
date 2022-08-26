import '@testing-library/jest-dom'
//setup tests to pick global decorators
import { setGlobalConfig } from '@storybook/testing-react'
import * as globalStorybookConfig from './.storybook/preview'

setGlobalConfig(globalStorybookConfig)
