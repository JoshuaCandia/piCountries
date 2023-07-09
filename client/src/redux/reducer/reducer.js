/* eslint-disable no-case-declarations */
import {
	FILTER_COUNTRIES_BY_CONTINENT,
	GET_COUNTRIES,
	// FILTER_ACTIVITIES,
	FILTER_COUNTRIES_BY_NAME,
	FILTER_COUNTRIES_BY_SEARCH,
	SET_ORDER,
} from '../action-types/action-types'

const initialState = {
	countries: [],
	countriesCopy: [],
	activities: [],
	order: '',
}

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return {
				...state,
				countries: payload,
				countriesCopy: payload,
			}
		case FILTER_COUNTRIES_BY_CONTINENT:
			const statusFiltered =
				payload === 'Todos'
					? state.countriesCopy
					: state.countriesCopy.filter(country => country.continent === payload)

			return {
				...state,
				countries: statusFiltered,
			}

		case FILTER_COUNTRIES_BY_NAME:
			const sortedArray =
				payload === 'asc'
					? state.countries.sort(function (a, b) {
							if (a.name > b.name) return 1
							if (b.name > a.name) return -1
							return 0
					  })
					: state.countries.sort(function (a, b) {
							if (a.name > b.name) return -1
							if (b.name > a.name) return 1
							return 0
					  })
			return {
				...state,
				countries: sortedArray,
			}

		case FILTER_COUNTRIES_BY_SEARCH:
			state.countriesCopy = payload
			return {
				...state,

				countries: state.countriesCopy,
			}

		/* case FILTER_ACTIVITIES:
			const activitiesCopy = state.activities
			const activitiesFiltered =
				payload === 'default'
					? activitiesCopy
					: activitiesCopy.filter(activity => activity.continent === payload)
			return {
				...state,
				activities: payload,
				activitiesFiltered,
			} */

		case SET_ORDER:
			return {
				...state,
				order: payload,
			}
		default:
			return state
	}
}

export default reducer
