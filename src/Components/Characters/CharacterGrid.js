import React from 'react'
import Spinner from '../Ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ isLoading, items }) => {
    return (
        isLoading
            ?
            (<Spinner />)
            :
            (<section className="cards">
                {
                    items.map(item => (
                        <CharacterItem
                            key={item.char_id}
                            item={item}
                        />
                    ))
                }
            </section>)
    )
}

export default CharacterGrid
