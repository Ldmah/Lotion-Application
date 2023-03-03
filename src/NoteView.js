import { useOutletContext } from "react-router-dom";

function NoteView() {
    const [notesList, activeNote] = useOutletContext();
    return (
        <div className="note-content">
            {notesList.length == 0 ? (
                <>Select a note, or create a new one.</>
            ) : (
                <>
                    <div id="header">
                        <div id="title-and-date">
                            <div id="view-note-title">
                                <h3 id="view-note-h3">Creating a React Application</h3>
                            </div>
                            <div id="date-note-view">
                                <p id="written-date">February 7, 2023 at 8:28 PM</p>
                            </div>
                        </div>
                        <div id="buttons-view">
                            <button id="edit">Edit</button>
                            <button id="delete">Delete</button>
                        </div>
                    </div>
                    <div id="content-view">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum tristique imperdiet. Vestibulum venenatis ac risus vitae bibendum. Donec nisi felis, tempor vitae est vitae, molestie finibus mi. Ut consectetur nec nunc ac dapibus. Nam ac bibendum justo. Etiam lectus turpis, eleifend vitae nunc id, tempus fermentum elit. Proin turpis elit, malesuada sed ex ac, aliquet maximus felis. Fusce pulvinar accumsan quam, aliquam accumsan purus suscipit vitae. Vivamus id nulla libero. Vivamus vitae blandit ipsum, euismod consectetur odio. Etiam viverra, nisi quis aliquam euismod, nunc tortor tempus nulla, sed convallis nunc enim iaculis massa. Suspendisse varius enim vitae risus gravida, et placerat mauris aliquam. Proin nec orci elit. Curabitur rutrum turpis libero, mattis faucibus nisi dapibus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                            Sed convallis ligula purus, nec tincidunt ex imperdiet in. Vivamus viverra fringilla sapien. Praesent tempor turpis sit amet libero gravida aliquet. Quisque dolor mauris, laoreet et vulputate eu, tempor non erat. Fusce eget arcu non libero hendrerit eleifend. Aenean tempor metus in dui tincidunt, vitae euismod diam malesuada. Integer nec vestibulum lectus. Nam fringilla turpis at malesuada placerat. Etiam id lectus placerat, ultricies dolor ut, varius risus.

                            Proin condimentum iaculis ex in suscipit. Integer maximus efficitur imperdiet. Cras vel dictum purus. Ut ut interdum enim, eget aliquam lacus. Vivamus sed arcu velit. Sed pellentesque, leo eu ultricies aliquet, erat arcu cursus arcu, et efficitur enim risus non urna. Nam eleifend magna tortor, sed fermentum nunc aliquet in. Maecenas eleifend nisl vehicula, dignissim urna at, bibendum erat. Aenean sollicitudin ut justo sit amet sagittis. Donec vel vestibulum sapien. Fusce non augue et erat porttitor ullamcorper consectetur tempus urna. Aenean sodales tincidunt euismod. Nunc posuere dignissim volutpat.

                            Phasellus nibh nibh, gravida vitae commodo in, bibendum eget velit. Pellentesque gravida eleifend sem, sed eleifend ex dignissim sit amet. Aliquam varius nisl quis enim placerat dapibus. Vestibulum at tempus mi. Maecenas ultricies euismod massa id dictum. Maecenas eleifend tempor urna at sollicitudin. Maecenas et elit bibendum, suscipit magna at, pulvinar elit. Nunc aliquet eleifend laoreet. Phasellus nisi risus, condimentum eu justo posuere, scelerisque varius libero. Fusce et ligula a elit maximus bibendum nec vitae nisi. Nunc nec cursus dolor, ut vulputate quam. Sed dictum eget nunc sit amet lobortis. Nullam in augue non purus semper commodo ornare ut risus. Proin posuere, ligula eget sagittis dapibus, ligula nulla placerat neque, ut auctor orci magna dignissim eros.

                            In laoreet lorem ac magna congue faucibus. Donec eu augue a augue molestie ullamcorper a a ante. Aliquam feugiat urna id pharetra mattis. Quisque dapibus, nulla eget mattis mattis, nunc mauris ullamcorper odio, sit amet maximus purus nulla at ex. Aliquam erat volutpat. Proin ornare leo vel tortor pellentesque egestas. Donec laoreet feugiat finibus. Proin accumsan, metus quis elementum mattis, sem velit efficitur dui, at semper ante orci at massa. Mauris finibus maximus leo, nec malesuada leo eleifend eget. Mauris vel lectus lacus. Ut lacinia gravida tincidunt. Aenean mollis efficitur pretium. Suspendisse vel urna a ipsum viverra egestas. Donec laoreet, mauris condimentum interdum egestas, turpis nibh malesuada lacus, ac mattis felis leo vel sapien.

                            Proin et ante eu erat malesuada fringilla ut eget leo. Curabitur ullamcorper risus laoreet, venenatis elit et, pulvinar nisl. Proin nibh risus, condimentum sit amet ullamcorper a, dignissim ullamcorper ipsum. Morbi eu ultrices elit, in finibus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec elit et ex pellentesque tincidunt. Vestibulum sagittis sapien posuere, egestas odio at, ultricies metus. Vestibulum sit amet vehicula dui. Mauris eget eros tortor. Nunc nisl leo, efficitur at sapien volutpat, pretium feugiat tortor. Praesent pellentesque congue est. Morbi ut neque augue.

                            Etiam in consectetur nulla, et aliquam eros. Nullam lacinia nec turpis ac convallis. Sed vestibulum nunc quis gravida
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum tristique imperdiet. Vestibulum venenatis ac risus vitae bibendum. Donec nisi felis, tempor vitae est vitae, molestie finibus mi. Ut consectetur nec nunc ac dapibus. Nam ac bibendum justo. Etiam lectus turpis, eleifend vitae nunc id, tempus fermentum elit. Proin turpis elit, malesuada sed ex ac, aliquet maximus felis. Fusce pulvinar accumsan quam, aliquam accumsan purus suscipit vitae. Vivamus id nulla libero. Vivamus vitae blandit ipsum, euismod consectetur odio. Etiam viverra, nisi quis aliquam euismod, nunc tortor tempus nulla, sed convallis nunc enim iaculis massa. Suspendisse varius enim vitae risus gravida, et placerat mauris aliquam. Proin nec orci elit. Curabitur rutrum turpis libero, mattis faucibus nisi dapibus nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                            Sed convallis ligula purus, nec tincidunt ex imperdiet in. Vivamus viverra fringilla sapien. Praesent tempor turpis sit amet libero gravida aliquet. Quisque dolor mauris, laoreet et vulputate eu, tempor non erat. Fusce eget arcu non libero hendrerit eleifend. Aenean tempor metus in dui tincidunt, vitae euismod diam malesuada. Integer nec vestibulum lectus. Nam fringilla turpis at malesuada placerat. Etiam id lectus placerat, ultricies dolor ut, varius risus.

                            Proin condimentum iaculis ex in suscipit. Integer maximus efficitur imperdiet. Cras vel dictum purus. Ut ut interdum enim, eget aliquam lacus. Vivamus sed arcu velit. Sed pellentesque, leo eu ultricies aliquet, erat arcu cursus arcu, et efficitur enim risus non urna. Nam eleifend magna tortor, sed fermentum nunc aliquet in. Maecenas eleifend nisl vehicula, dignissim urna at, bibendum erat. Aenean sollicitudin ut justo sit amet sagittis. Donec vel vestibulum sapien. Fusce non augue et erat porttitor ullamcorper consectetur tempus urna. Aenean sodales tincidunt euismod. Nunc posuere dignissim volutpat.

                            Phasellus nibh nibh, gravida vitae commodo in, bibendum eget velit. Pellentesque gravida eleifend sem, sed eleifend ex dignissim sit amet. Aliquam varius nisl quis enim placerat dapibus. Vestibulum at tempus mi. Maecenas ultricies euismod massa id dictum. Maecenas eleifend tempor urna at sollicitudin. Maecenas et elit bibendum, suscipit magna at, pulvinar elit. Nunc aliquet eleifend laoreet. Phasellus nisi risus, condimentum eu justo posuere, scelerisque varius libero. Fusce et ligula a elit maximus bibendum nec vitae nisi. Nunc nec cursus dolor, ut vulputate quam. Sed dictum eget nunc sit amet lobortis. Nullam in augue non purus semper commodo ornare ut risus. Proin posuere, ligula eget sagittis dapibus, ligula nulla placerat neque, ut auctor orci magna dignissim eros.

                            In laoreet lorem ac magna congue faucibus. Donec eu augue a augue molestie ullamcorper a a ante. Aliquam feugiat urna id pharetra mattis. Quisque dapibus, nulla eget mattis mattis, nunc mauris ullamcorper odio, sit amet maximus purus nulla at ex. Aliquam erat volutpat. Proin ornare leo vel tortor pellentesque egestas. Donec laoreet feugiat finibus. Proin accumsan, metus quis elementum mattis, sem velit efficitur dui, at semper ante orci at massa. Mauris finibus maximus leo, nec malesuada leo eleifend eget. Mauris vel lectus lacus. Ut lacinia gravida tincidunt. Aenean mollis efficitur pretium. Suspendisse vel urna a ipsum viverra egestas. Donec laoreet, mauris condimentum interdum egestas, turpis nibh malesuada lacus, ac mattis felis leo vel sapien.

                            Proin et ante eu erat malesuada fringilla ut eget leo. Curabitur ullamcorper risus laoreet, venenatis elit et, pulvinar nisl. Proin nibh risus, condimentum sit amet ullamcorper a, dignissim ullamcorper ipsum. Morbi eu ultrices elit, in finibus mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec elit et ex pellentesque tincidunt. Vestibulum sagittis sapien posuere, egestas odio at, ultricies metus. Vestibulum sit amet vehicula dui. Mauris eget eros tortor. Nunc nisl leo, efficitur at sapien volutpat, pretium feugiat tortor. Praesent pellentesque congue est. Morbi ut neque augue.

                            Etiam in consectetur nulla, et aliquam eros. Nullam lacinia nec turp
                        </p>
                    </div>
                </>
            )}
        </div>
        
    )
}

export default NoteView;


