import { useState, useEffect } from 'react';
import { FlatList, Text, TextInput, View, SafeAreaView, StyleSheet, Button, Modal, TouchableOpacity } from 'react-native';
import { Task, Tasks } from "@hooks/useGetTasks";

export default function Home() {
    const [text, onChangeText] = useState('');
    const [createTask, setCreateTask] = useState<boolean>(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task>({
        name: '',
        desc: '',
        initDate: '',
        endDate: '',
        dificult: '',
        TeamMembers: '',
    });

    useEffect(() => {
        setTasks(Tasks);
        setFilteredTasks(Tasks);
    }, []);

    useEffect(() => {
        const filtered = tasks.filter(task =>
            task.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredTasks(filtered);
    }, [text, tasks]);

    const renderItem = ({ item }: { item: Task }) => (
        <View className='bg-white p-4 mb-4 rounded-lg shadow'>
            <Text className='font-bold text-lg'>{item.name}</Text>
            <Text>{item.desc}</Text>
            <Text>Início: {item.initDate}</Text>
            <Text>Fim: {item.endDate}</Text>
            <Text>Dificuldade: {item.dificult}</Text>
            <Text>Membros da Equipe: {item.TeamMembers}</Text>
        </View>
    );

    const handleCreateTask = () => {
        setTasks([...tasks, newTask]);
        setFilteredTasks([...tasks, newTask]);
        setCreateTask(false); // Fecha o modal
        setNewTask({ name: '', desc: '', initDate: '', endDate: '', dificult: '', TeamMembers: '' });
    };

    return (
        <SafeAreaView className='flex-1 w-full items-center bg-gray-100'>

            <View className='w-full h-[80px] bg-white flex items-center justify-end'>
                <Text className='text-lg font-semibold'>Tasks da semana</Text>
            </View>

            <View className='flex flex-col w-full justify-between p-2'>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search tasks..."
                    className="border border-gray-300 p-2 rounded mb-4"
                />
                <Button
                    onPress={() => setCreateTask(true)} // Abre o modal
                    title="Create New Task"
                    color="#000"
                    accessibilityLabel="Create New Tasks"
                />
            </View>

            <FlatList
                className='w-full p-2'
                data={filteredTasks}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />

            <Modal
                transparent={true}
                animationType="slide"
                visible={createTask}
                onRequestClose={() => setCreateTask(false)}
            >
                <View className="flex-1 justify-center items-center bg-gray-800 bg-opacity-50">
                    <View className='bg-white w-11/12 p-4 rounded-lg shadow'>
                        <Text className='text-lg font-semibold mb-4'>Create New Task</Text>
                        <TextInput
                            placeholder="Task Name"
                            onChangeText={text => setNewTask({ ...newTask, name: text })}
                            value={newTask.name}
                            className="border border-gray-300 p-2 rounded mb-2"
                        />
                        <TextInput
                            placeholder="Description"
                            onChangeText={text => setNewTask({ ...newTask, desc: text })}
                            value={newTask.desc}
                            className="border border-gray-300 p-2 rounded mb-2"
                        />
                        <TextInput
                            placeholder="Start Date (YYYY-MM-DD)"
                            onChangeText={text => setNewTask({ ...newTask, initDate: text })}
                            value={newTask.initDate}
                            className="border border-gray-300 p-2 rounded mb-2"
                        />
                        <TextInput
                            placeholder="End Date (YYYY-MM-DD)"
                            onChangeText={text => setNewTask({ ...newTask, endDate: text })}
                            value={newTask.endDate}
                            className="border border-gray-300 p-2 rounded mb-2"
                        />
                        <TextInput
                            placeholder="Difficulty"
                            onChangeText={text => setNewTask({ ...newTask, dificult: text })}
                            value={newTask.dificult}
                            className="border border-gray-300 p-2 rounded mb-2"
                        />
                        <TextInput
                            placeholder="Team Members"
                            onChangeText={text => setNewTask({ ...newTask, TeamMembers: text })}
                            value={newTask.TeamMembers}
                            className="border border-gray-300 p-2 rounded mb-4"
                        />
                        <Button title="Create Task" onPress={handleCreateTask} />
                        <TouchableOpacity onPress={() => setCreateTask(false)} className="mt-2">
                            <Text className='text-red-500 text-center'>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
}
