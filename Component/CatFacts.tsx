import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const CatFacts = () => {
    const [catFactsData, setCatFactsData] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
            .then((res) => res.json())
            .then((data) => {
                setCatFactsData(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading && <Text>Loading...</Text>}
            {!loading && catFactsData?.length > 0 ? (
                <Text>{catFactsData[0].text}</Text>
            ) : (
                !loading && <Text>No Cats Data Found</Text>
            )}
        </>
    );
};

export default CatFacts;
