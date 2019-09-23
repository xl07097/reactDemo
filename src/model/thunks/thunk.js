import { getUserList } from '@/api/product';

export function asyncAdd() {
    return dispatch => {
        getUserList({ page: 1, size: 100 }).then(data => {
            if (data.code === 200) {
                dispatch({
                    type: 'fetch_list',
                    list: data.data
                });
            }
        });
    };
}