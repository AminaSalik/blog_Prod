
import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";

function Filter() {
    return (
        <>

            <section>
                <div className='flex justify-center py-8'>
                    <Card className="w-full max-w-[24rem] ">
                        <List className="flex-row">
                            <ListItem className="p-0">
                                <label
                                    htmlFor="horizontal-list-react"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Radio
                                            name="horizontal-list"
                                            id="horizontal-list-react"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="font-medium text-blue-gray-400"
                                    >
                                        All
                                    </Typography>
                                </label>
                            </ListItem>
                            <ListItem className="p-0">
                                <label
                                    htmlFor="horizontal-list-vue"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Radio
                                            name="horizontal-list"
                                            id="horizontal-list-vue"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="font-medium text-blue-gray-400"
                                    >
                                        Product
                                    </Typography>
                                </label>
                            </ListItem>
                            <ListItem className="p-0">
                                <label
                                    htmlFor="horizontal-list-svelte"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                >
                                    <ListItemPrefix className="mr-3">
                                        <Radio
                                            name="horizontal-list"
                                            id="horizontal-list-svelte"
                                            ripple={false}
                                            className="hover:before:opacity-0"
                                            containerProps={{
                                                className: "p-0",
                                            }}
                                        />
                                    </ListItemPrefix>
                                    <Typography
                                        color="blue-gray"
                                        className="font-medium text-blue-gray-400"
                                    >
                                        Partrenhips
                                    </Typography>
                                </label>
                            </ListItem>
                        </List>
                    </Card>
                </div>
            </section>


        </>
    )
}

export default Filter
