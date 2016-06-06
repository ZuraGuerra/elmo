// -*- js -*-

import {run} from '../src/hellcycle'
import {makeElmoDriver, makeElmoComponent} from '../src/elmo'
import {makeInfernoDriver} from '../src/inferno'

import S from '../src/stream'
import R from 'ramda'
import Counter from './counter'

run(main, drivers())

function main ({elmoBus, counter, inferno}) {
  return {
    counter: elmoBus,
    inferno: counter.view$
  }
}

function drivers() {
  return {
    elmoBus: R.identity,
    counter: makeElmoDriver(Counter),
    inferno: makeInfernoDriver(document.body)
  }
}